package main

import (
	"log"
	"os"
	"slices"
	"strconv"
	"strings"
)


func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_one.txt")
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

func getFirstInt(line string) string {
	for i := 0; i < len(line); i ++ {
		char := line[i]
		_, err := strconv.Atoi(string(char))
		if err != nil {
			continue
		}
		return string(char)
	}
	log.Fatalf("No integer found!")
	return ""
}

func getLastInt(line string) string {
	for i := len(line) - 1; i >= 0; i -- {
		char := line[i]
		_, err := strconv.Atoi(string(char))
		if err != nil {
			continue
		}
		return string(char)
	}
	log.Fatalf("No integer found!")
	return ""
}

func solutionOne(lines []string) {
	total := 0
	for i := 0; i < len(lines)-1; i ++ {
		number := getFirstInt(lines[i]) + getLastInt(lines[i])
		integer, _ := strconv.Atoi(number)
		total += integer
	}
	log.Printf("Solution: %v", total)
}


/////////////////////
// Solution Part 2 //
/////////////////////

var numberMap = map[string]string{
	"one": "1",
	"two": "2",
	"three": "3",
	"four": "4",
	"five": "5",
	"six": "6",
	"seven": "7",
	"eight": "8",
	"nine": "9",
}
var numbers = []string{
	"one",
	"1",
	"two",
	"2",
	"three",
	"3",
	"four",
	"4",
	"five",
	"5",
	"six",
	"6",
	"seven",
	"7",
	"eight",
	"8",
	"nine",
	"9",
}

func getTarget(slice []int, first bool) int {
	if first {
		return slices.Min(slice)
	} else {
		return slices.Max(slice)
	}
}

func getIndex(line string, item string, first bool) int {
	if first {
		return strings.Index(line, item)
	} else {
		return strings.LastIndex(line, item)
	}
}

func getIntAgnostic(line string, first bool) string {
	var indices []int
	numberIndex := make(map[string]int)

	// gather locations of numbers in the line
	for _, number := range numbers {
		index := getIndex(line, number, first)
		if index >= 0 {
			numberIndex[number] = index
			indices = append(indices, index)
		}
	}

	// return the number
	for number, index := range numberIndex {

		targetIndex := getTarget(indices, first)

		if index == targetIndex {
			// swap the written number for the digit if needed
			_, err := strconv.Atoi(number)
			if err != nil {
				return strings.Replace(number, number, numberMap[number], 1)
			}
			return number
		}
	}
	log.Fatal("Failed to find integer in %s!", line)
	return ""
}

func solutionTwo(lines []string) {
	realTotal := 0
	for i := 0; i < len(lines)-1; i ++ {
		number := getIntAgnostic(lines[i], true) + getIntAgnostic(lines[i], false)
		integer, _ := strconv.Atoi(number)
		realTotal += integer
	}
	log.Printf("Solution: %v", realTotal)
}
