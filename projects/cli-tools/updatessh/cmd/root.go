package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "updatessh",
	Short: "Sync your ssh config with running EC2's",
	Long: `A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

UpdateSSH is a CLI tool for keeping your ssh config up-to-date.
Currently this only adds Host entries for running AWS EC2 instances.`,
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.updatessh.yaml)")
}
