package main

import (
	"errors"
	"log"
	"os"
	"slices"
	"strconv"
	"strings"
)


func main() {
	// gather input
	input, err := os.ReadFile("./inputs/day_seven.txt")
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

type Hand struct {
	Cards string
	Bid int
	Rank int
	Strength int
}

var (
	handStrength = map[string]int{
		"five": 7,
		"four": 6,
		"full": 5,
		"three": 4,
		"two": 3,
		"one": 2,
		"high": 1,
	}
	cardStrength = []int{"A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"}
)

func splitHandAndBids(values []string) []Hand {
	var handsAndBids []Hand
	for _, value := range values {
		v := strings.Split(value, " ")
		vInt, err := strconv.Atoi(v[1])
		if err != nil {
			log.Fatalf("Error converting string", err)
		}
		handsAndBids = append(handsAndBids, Hand{Cards: v[0], Bid: vInt})
	}
	return handsAndBids
}

func getStrength(hands []Hand) []Hand {
	var handsWithStrength []Hand
	for _, hand := range hands {
		t, err := getType(hand.Cards)
		if err != nil {
			log.Fatalf("Error finding hand strength for %s", hand.Cards)
		}
		hand.Strength = handStrength[t]
		handsWithStrength = append(handsWithStrength, hand)
	}
	return handsWithStrength
}

func isFourKind(cardCount map[string]int) bool {
	for _, count := range cardCount {
		if count == 4 || count == 1 {
			return true
		}
	}
	return false
}

func isThreeKind(cardCount map[string]int) bool {
	for _, count := range cardCount {
		if count == 3 {
			return true
		}
	}
	return false
}

func getType(hand string) (string, error) {
	cardCount := make(map[string]int)
	var unique []string

	values := strings.Split(hand,"")

	for _, value := range values {
		if slices.Contains(unique, value) {
			cardCount[value] += 1
		} else {
			unique = append(unique, value)
			cardCount[value] = 1
		}
	}

	length := len(unique)
	if length == 1 {
		// Five of a kind, where all five cards have the same label: AAAAA
		return "five", nil
	} else if length == 2 { // full house, four of a kind
		if isFourKind(cardCount) {
			// Four of a kind, where four cards have the same label and one card has a different label: AA8AA
			return "four", nil
		} else {
			// Full house, where three cards have the same label, and the remaining two cards share a different label: 23332
			return "full", nil
		}
	} else if length == 3 {
		if isThreeKind(cardCount) {
			// Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
			return "three", nil
		} else {
			// Two pair, where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
			return "two", nil
		}
	} else if length == 4 {
		// One pair, where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
		return "one", nil
	} else if length == 5 {
		// High card, where all cards' labels are distinct: 23456
		return "high", nil
	} else {
		// todo return error
		return "", errors.New("A hand type was not found!")
	}
}

func sortHands(hands []Hand) []Hand {
	// sort hands by strength first
	var handsByStrength []Hand
	for strength := 1; strength < 8; strength++ {
		for _, hand := range hands {
			if hand.Strength == strength {
				handsByStrength = append(handsByStrength, hand)
			}
		}
	}
	// further sort hands by strength of leading cards
	// TODO use a recursive function to order hands of equal strength by `cardStrength`
	return hands
}

func solutionOne(lines []string) {
	log.Printf("TODO: %s", lines[0])

	// parse hands and bids
	hands := splitHandAndBids(lines)
	log.Printf("Hands: %v", hands[0])

	// get strength of each hand
	handsWithStrength := getStrength(hands)
	log.Printf("Hands: %v", handsWithStrength)

	// TODO
	// Get the rank (sort order) of each hand based on; total strength of hand, and strenght of leading cards in hand
	handsSorted := sortHands(handsWithStrength)
	log.Printf("hands: %v, %v", handsSorted[0], handsSorted[1])

	// TODO
	// calculate total wininings (the sum of bids * rank)
	winnings := 0
	for _, hand := range handsSorted {
		winnings += hand.Rank * hand.Bid
	}
	log.Printf("Solution: %v", winnings)
}


/////////////////////
// Solution Part 2 //
/////////////////////

func solutionTwo(lines []string) {
	log.Printf("TODO: %s", lines[0])
	//log.Printf("Solution: %v", )
}
