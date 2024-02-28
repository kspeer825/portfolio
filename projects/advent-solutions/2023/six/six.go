package main

import (
	"log"
	"os"
	"strings"
	"strconv"
)


func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_six.txt")
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

func abs(value int) int {
	if value < 0  {
		return -1 * value
	}
	return value
}

func getDistance(timeHeld int, totalTime int) int {
	// v * t = x
	return timeHeld * abs(totalTime - timeHeld)
}

func multiplyItems(product int, index int, items []int) int {
	if index < len(items) - 1 {
		return multiplyItems(product, index+1, items) * items[index]
	}
	return product * items[index]
}

func solutionOne(lines []string) {
	times := strings.Fields(lines[0])
	distances := strings.Fields(lines[1])
	log.Printf("Times: %v", times)
	log.Printf("Distances: %v", distances)

	var winnerWinnerChickenDinner []int
	// for each race, find the distances for all times
	for i, strTime := range times {

		intTime, err := strconv.Atoi(strTime)
		if err != nil {
			continue
		}
		intDistance, err := strconv.Atoi(distances[i])
		if err != nil {
			continue
		}

		winningTimes := 0
		for t := 1; t < intTime; t++ {
			if getDistance(t, intTime) > intDistance {
				winningTimes += 1
			}
		}
		winnerWinnerChickenDinner = append(winnerWinnerChickenDinner, winningTimes)
	}
	solution := multiplyItems(1, 0, winnerWinnerChickenDinner)
	log.Printf("Solution: %v", solution)
}


/////////////////////
// Solution Part 2 //
/////////////////////

func solutionTwo(lines []string) {
	time := strings.ReplaceAll(strings.Split(lines[0], "Time:")[1], " ", "")
	distance := strings.ReplaceAll(strings.Split(lines[1], "Distance:")[1], " ", "")
	log.Printf("Time: %v", time)
	log.Printf("Distance: %v", distance)

	intTime, err := strconv.Atoi(time)
	if err != nil {
		log.Fatal("Error: ", err)
	}

	intDistance, err := strconv.Atoi(distance)
	if err != nil {
		log.Fatal("Error: ", err)
	}

	winningTimes := 0
	for t := 1; t < intTime; t++ {
		if getDistance(t, intTime) > intDistance {
			winningTimes += 1
		}
	}
	log.Printf("Solution: %v", winningTimes)
}
