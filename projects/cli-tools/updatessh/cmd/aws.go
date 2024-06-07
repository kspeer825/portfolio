package cmd

import (
	"bufio"
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/spf13/cobra"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	ec2Types "github.com/aws/aws-sdk-go-v2/service/ec2/types"
)

var profile string

var controlStart string = "##### DO NOT MODIFY - Start UpdateSSH Control Block - DO NOT MODIFY #####"
var controlEnd string = "##### DO NOT MODIFY - End UpdateSSH Control Block - DO NOT MODIFY #####"

var awsCmd = &cobra.Command{
	Use:   "aws",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {

		// setup

		awsProfile, set := os.LookupEnv("AWS_PROFILE")
		if set && awsProfile != profile && profile != "default" {
			fmt.Println(fmt.Sprintf(
				"profile mismatch error: cannot reconcile CLI argument with environment variable " +
					"AWS_PROFILE=%s  profile=%s", awsProfile, profile))
			os.Exit(1)
		} else if ! set {
			os.Setenv("AWS_PROFILE", profile)
		}
		fmt.Println(fmt.Sprintf("Initializing AWS client using %s profile.", profile))
		cfg, err := config.LoadDefaultConfig(context.TODO())
		if err != nil {
			fmt.Println(err.Error())
		}
		client := ec2.NewFromConfig(cfg)

		// scan aws running instances

		fmt.Println("Scanning EC2s")
		name := "tag:Name"
		value := "test"
		filter := &ec2Types.Filter{
			Name: &name,
			Values: []string{fmt.Sprintf("*%s*", value)},
		}
		input := &ec2.DescribeInstancesInput{
			Filters: []ec2Types.Filter{
				*filter,
			},
			// NextToken: TODO
		}
		var blocks []string
		res, err := client.DescribeInstances(context.TODO(), input)
		if err != nil {
			fmt.Println(err.Error())
		}
		for _, reservation := range res.Reservations {
			for _, instance := range reservation.Instances {
				var block string
				for _, tag := range instance.Tags {
					if *tag.Key == "Name" {
						// TODO make aws_<env>_hostname a variable
						block = fmt.Sprintf("Host %s_%v\n", profile, *tag.Value)
					}
				}
				if instance.PublicIpAddress != nil {
					block += fmt.Sprintf("  Hostname %v\n", *instance.PublicIpAddress)
					blocks = append(blocks, block + "\n")
				}
			}
		}

		// scan config for include block

		dir := os.Getenv("HOME")
		if dir == "" {
			panic("HOME env var not set.")
		}
		controlInclude := fmt.Sprintf("Include %s/.ssh/.updatessh/ssh_config", dir)
		configR, err := os.Open(fmt.Sprintf("%s/.ssh/config", dir))
		if err != nil {
			panic(err)
		}
		defer configR.Close()

		scanner := bufio.NewScanner(configR)
		var contents []string
		for scanner.Scan() {
			if scanner.Text() == controlStart || controlEnd == scanner.Text() || controlInclude == scanner.Text() {
				contents = append(contents, scanner.Text())
			}
		}
		if err := scanner.Err(); err != nil {
			panic(err)
		}
		if len(contents) == 0 {
			fmt.Println(fmt.Sprintf("Writing Inlcude block to %s/.ssh/config", dir))
			configW, err := os.OpenFile(fmt.Sprintf("%s/.ssh/config", dir), os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
			if err != nil {
				panic(err)
			}
			defer configW.Close()

			writer := bufio.NewWriter(configW)
			writeLine(writer, fmt.Sprintf("\n%s\n%s\n%s\n", controlStart, controlInclude, controlEnd))
			err = writer.Flush()
			if err != nil {
				panic(err)
			}

		} else if strings.Join(contents, "") != controlStart + controlInclude + controlEnd {
			fmt.Println("ERROR: control block improperly formatted")
		}

		err = os.MkdirAll(fmt.Sprintf("%s/.ssh/.updatessh", dir), os.ModePerm)
		if err != nil || ! os.IsExist(err) {
		}

		// write hostname blocks to config

		fmt.Println(fmt.Sprintf("Updating %s/.ssh/.updatessh/ssh_config", dir))
		testConfig, err := os.Create(fmt.Sprintf("%s/.ssh/.updatessh/ssh_config", dir))
		if err != nil {
			panic(err)
		}
		defer testConfig.Close()
		writer := bufio.NewWriter(testConfig)

		writeLine(writer, controlStart + "\n")
		for _, block := range blocks {
			writeLine(writer, block)
		}
		writeLine(writer, controlEnd)

		err = writer.Flush()
		if err != nil {
			panic(err)
		}
		// TOOD read blocks from file
		// TOOD update / remove existing blocks based on <env>
	},
}

func writeLine(w *bufio.Writer, line string) {
	_, err := w.WriteString(line + "\n")
	if err != nil {
		panic(err)
	}
}

func init() {
	rootCmd.AddCommand(awsCmd)

	// persistent flags
	awsCmd.Flags().StringVar(&profile, "profile", "default", "AWS profile (required)")
	//awsCmd.MarkFlagRequired("profile")

}
