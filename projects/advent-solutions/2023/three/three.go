package main

import (
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_three.txt")
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

type Part struct {
	value    int
	location []Coordinate
}
type Symbol struct {
	value    string
	location Coordinate
}

type Coordinate struct {
	x int
	y int
}

func isSymbol(char string) bool {
	return char != "." && !isInteger(char)
}

func isInteger(char string) bool {
	_, err := strconv.Atoi(char)
	if err != nil {
		return false
	}
	return true
}

func isNear(first int, second int) bool {
	if first > second {
		return (first - second) <= 1
	} else {
		return (second - first) <= 1
	}
}

func isSymbolAdjacent(part []Coordinate, symbols []Coordinate) bool {
	for _, coordinate := range part {
		for _, symbol := range symbols {
			if isNear(coordinate.x, symbol.x) && isNear(coordinate.y, symbol.y) {
				return true
			}
		}
	}
	return false
}

func solutionOne(lines []string) {
	var schematic = make([][]string, len(lines))

	// build the schematic
	for i, line := range lines {
		schematic[i] = strings.Split(strings.TrimSpace(line), "")
	}

	// find all part numbers, and symbols in the schematic
	var parts []Part
	var symbols []Symbol
	for y, schema := range schematic {
		x := 0
		for x < len(schema) {

			isInt := isInteger(schema[x])
			isSym := isSymbol(schema[x])

			if isSym {
				symbols = append(symbols, Symbol{value: schema[x], location: Coordinate{x: x, y: y}})
				x += 1
			} else if isInt {
				// account for multi-digit part numbers
				var partString string
				var partLocation []Coordinate
				for isInt {
					partString += schema[x]
					partLocation = append(partLocation, Coordinate{x: x, y: y})
					x += 1
					if x >= len(schema) {
						break
					}
					isInt = isInteger(schema[x])
				}
				partInteger, _ := strconv.Atoi(partString)
				parts = append(parts, Part{value: partInteger, location: partLocation})
			} else {
				x += 1
			}
		}
	}

	// gather coordinates of all symbols
	var symbolCoordinates []Coordinate
	for _, symbol := range symbols {
		symbolCoordinates = append(symbolCoordinates, symbol.location)
	}

	// add up all parts adjacent to a symbol
	sumOfAllParts := 0
	for _, part := range parts {
		if isSymbolAdjacent(part.location, symbolCoordinates) {
			sumOfAllParts += part.value
		}
	}
	log.Printf("Solution: %v", sumOfAllParts)
}

/////////////////////
// Solution Part 2 //
/////////////////////

func solutionTwo(lines []string) {
	log.Printf("TODO")
	//log.Printf("Solution: %v", )
}
