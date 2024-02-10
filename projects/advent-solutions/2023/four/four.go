package main

import (
	"log"
	"math"
	"os"
	"slices"
	"strings"
)

func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_four.txt")
	if err != nil {
		log.Fatalf("Error reading file", err)
	}
	lines := strings.Split(string(input), "\n")

	log.Printf("********** Part 1 **********")
	solutionOne(lines)

	log.Printf("********** Part 2 **********")
	solutionTwo(lines)
}

/////////////////////
// Solution Part 1 //
/////////////////////

func countMatches(first []string, second []string) int {
	matches := 0
	for _, f := range first {
		if slices.Contains(second, f) {
			matches += 1
		}
	}
	return matches
}

func solutionOne(lines []string) {
	points := 0
	for _, line := range lines {
		if line == "" {
			continue
		}
		numbers := strings.Split(strings.Split(line, ":")[1], "|")
		winning := strings.Split(strings.Replace(strings.TrimSpace(numbers[0]), "  ", " ", -1), " ")
		ticket := strings.Split(strings.Replace(strings.TrimSpace(numbers[1]), "  ", " ", -1), " ")

		// determine the overlap b/t winning numbers and the current ticket
		matches := countMatches(ticket, winning)

		// the first match is worth 1 point and
		// subsequant matches are worth double the points (2 ^ n -1)
		points += int(math.Pow(float64(2), float64(matches-1)))
	}
	log.Printf("Solution: %v", points)
}

/////////////////////
// Solution Part 2 //
/////////////////////

func solutionTwo(lines []string) {
	log.Printf("TODO: %s", lines[0])
	//log.Printf("Solution: %v", )
}
