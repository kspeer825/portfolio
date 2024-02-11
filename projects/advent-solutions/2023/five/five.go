package main

import (
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_five.txt")
	if err != nil {
		log.Fatalf("Error reading file", err)
	}
	lines := strings.Split(string(input), "\n")

	log.Printf("********** Part 1 **********")
	solutionOne(lines)

	//log.Printf("********** Part 2 **********")
	//solutionTwo(lines)
}

/////////////////////
// Solution Part 1 //
/////////////////////

var (
	almanac = make([][][]int, 7)
)

func getIntegers(values string) []int {
	var intList []int
	stringList := strings.Split(strings.TrimSpace(values), " ")
	for _, str := range stringList {
		integer, err := strconv.Atoi(str)
		if err != nil {
			continue
			// log.Fatalf("Error: %v", err)
		}
		intList = append(intList, integer)
	}
	return intList
}

func getLocation(source int, mapIndex int) int {
	if mapIndex >= len(almanac) {
		return source
	}
	for _, entry := range almanac[mapIndex] {
		destinationStart := entry[0]
		sourceStart := entry[1]
		sourceEnd := sourceStart + entry[2] - 1

		if (source >= sourceStart) && (source <= sourceEnd) {
			destination := destinationStart + (source - sourceStart)
			return getLocation(destination, mapIndex+1)
		}
	}
	return getLocation(source, mapIndex+1)
}

func solutionOne(lines []string) {
	seeds := getIntegers(lines[0])
	i := 0
	for _, line := range lines[3:] {
		if line == "" {
			continue
		} else if strings.Contains(line, "map") {
			i += 1
			continue
		} else {
			almanac[i] = append(almanac[i], getIntegers(line))
		}
	}
	var locations []int
	for _, seed := range seeds {
		locations = append(locations, getLocation(seed, 0))
	}
	sort.Ints(locations)
	log.Printf("Solution: %v", locations[0])
}

/////////////////////
// Solution Part 2 //
/////////////////////

// TODO this hits memory errors, probably need to work backwards through almanac mappings
//	to find which potential seeds can result in lowest location

func getSeeds(seeds []int) []int {
	var allSeeds []int
	for i := 0; i < len(seeds)-1; i += 2 {
		start := seeds[i]
		seedRange := seeds[i+1]
		for s := start; s < (start + seedRange - 1); s += 1 {
			allSeeds = append(allSeeds, s)
		}
	}
	return allSeeds
}

func solutionTwo(lines []string) {
	seeds := getSeeds(getIntegers(lines[0]))
	i := 0
	for _, line := range lines[3:] {
		if line == "" {
			continue
		} else if strings.Contains(line, "map") {
			i += 1
			continue
		} else {
			almanac[i] = append(almanac[i], getIntegers(line))
		}
	}
	var locations []int
	for _, seed := range seeds {
		locations = append(locations, getLocation(seed, 0))
	}
	sort.Ints(locations)
	log.Printf("Solution: %v", locations[0])
}
