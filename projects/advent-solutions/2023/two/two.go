package main

import (
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_two.txt")
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

type Scenario struct {
	Color    string
	Quantity int
}

func stringSplitTrim(str string, del string) []string {
	var trimmed []string
	splitStrings := strings.Split(str, del)
	for _, s := range splitStrings {
		trimmed = append(trimmed, strings.TrimSpace(s))
	}
	return trimmed
}

//scenario := map[string]intonly 12 red cubes, 13 green cubes, and 14 blue cubes

func solutionOne(lines []string) {
	limitingScenarios := map[string]int{
		"red":   12,
		"green": 13,
		"blue":  14,
	}

	// iterate through each game
	possibleGames := 0
	for _, line := range lines {
		// skip any empty lines
		if line == "" {
			continue
		}

		// parse game for it's id
		gameAndRounds := stringSplitTrim(line, ":")
		game := gameAndRounds[0]
		gameId, err := strconv.Atoi(stringSplitTrim(game, " ")[1])
		if err != nil {
			log.Fatalf("Error: %v", err)
		}

		var scenarios [][]Scenario

		// parse game for each round's outcome
		rounds := stringSplitTrim(gameAndRounds[1], ";")
		for _, round := range rounds {

			var scenario []Scenario

			// each cube set (Scenario) must be parsed from the round
			groupings := stringSplitTrim(round, ",")
			for _, group := range groupings {
				outcome := stringSplitTrim(group, " ")

				color := outcome[1]
				quantity, err := strconv.Atoi(outcome[0])
				if err != nil {
					log.Fatalf("Error: %v", err)
				}

				scenario = append(scenario, Scenario{Quantity: quantity, Color: color})
			}
			scenarios = append(scenarios, scenario)
		}
		// validate each round's Scenarios and record the game id if all are possilbe
		valid := true
		for _, scenario := range scenarios {
			for _, cubes := range scenario {
				if cubes.Quantity > limitingScenarios[cubes.Color] {
					valid = false
					break
				}
			}
		}
		if valid {
			possibleGames += gameId
		}

	}
	log.Printf("Solution: %v", possibleGames)
}

/////////////////////
// Solution Part 2 //
/////////////////////

func solutionTwo(lines []string) {
	// iterate through each game
	powerSum := 0
	for _, line := range lines {
		// skip any empty lines
		if line == "" {
			continue
		}

		limitingScenario := map[string]int{
			"red":   0,
			"green": 0,
			"blue":  0,
		}

		// parse game for each round's outcome
		gameAndRounds := stringSplitTrim(line, ":")
		rounds := stringSplitTrim(gameAndRounds[1], ";")
		for _, round := range rounds {

			// each cube set must be parsed from the round
			groupings := stringSplitTrim(round, ",")
			for _, group := range groupings {
				outcome := stringSplitTrim(group, " ")

				color := outcome[1]
				quantity, err := strconv.Atoi(outcome[0])
				if err != nil {
					log.Fatalf("Error: %v", err)
				}

				// record the max quantity for each color across all rounds in the current game
				if quantity > limitingScenario[color] {
					limitingScenario[color] = quantity
				}
			}
		}
		// keep a running sum of all powers
		power := 1
		for _, quantity := range limitingScenario {
			power = power * quantity
		}
		powerSum += power
	}
	log.Printf("Solution: %v", powerSum)
}
