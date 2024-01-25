from math import log, e
"""
MY SOLUTION:
[root@colima src]# make solve day=six
********** PART 1 **********
SOLUTION:  385391
********** PART 2 **********
SOLUTION:  1728611055389
"""


##########
# Shared #
##########


def read_input(filePath: str):
    """
    Read and parse input file.
    """

    parsed_lines = []

    with open(filePath, "r") as inputFile:
        lines = inputFile.readlines()
        parsed_lines += lines[0].split(",")

    return parsed_lines


lifecycle = 6
new_lifecycle = 8


################
# Solution One #
################


def count_fish(lines: list, days: int):
    lanternfish = [int(num) for num in lines]

    # simulate population one day at a time
    for _ in range(days):
        zeros = lanternfish.count(0)

        for index in range(len(lanternfish)):

            # start the lifecyle over
            if lanternfish[index] == 0:
                lanternfish[index] = lifecycle
                continue
            # or decrease it's state by 1
            lanternfish[index] -= 1

        # for every restarted lifecycle, add a new fish
        lanternfish.extend([new_lifecycle for _ in range(zeros)])
    return lanternfish


def solution_one():
    """This solution will not scale with input size."""
    print("********** PART 1 **********")

    lines = read_input("inputs/day_six.txt")
    days = 80
    lanternfish = count_fish(lines, days)

    print("SOLUTION: ", len(lanternfish))


################
# Solution TWO #
################


def count_lifecycles(lines: list):
    """Count the number of fish in each state of the lifecycle 0 -> 8"""
    laternfish = [int(num) for num in lines]
    lifecycles = [0 for _ in range(new_lifecycle + 1)]

    for fish in laternfish:
        lifecycles[fish] += 1

    return lifecycles

def population_over_time(population: list, days: int):

    current_population = population.copy()

    # every day
    for day in range(days):
        next_population = []
        # print(current_population)

        for _ in range(new_lifecycle):
            # each fish's lifecycle state reduces by one
            next_population.insert(0, current_population.pop())

        # those at the end of the lifecycle start over
        # and new fish are born
        count = current_population.pop()
        next_population.append(count)
        next_population[lifecycle] += count

        current_population = next_population.copy()

    return current_population

def solution_two():
    """This solution WILL work at scale."""

    print("********** PART 2 **********")

    lines = read_input("inputs/day_six.txt")
    days = 256

    lifecycles = count_lifecycles(lines)
    lanternfish_population = population_over_time(lifecycles, days)

    print("SOLUTION: ", sum(lanternfish_population))


if __name__ == "__main__":
   solution_one()
   solution_two()