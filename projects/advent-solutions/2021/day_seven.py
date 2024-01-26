"""
MY SOLUTION:
[root@colima src]# make solve day=seven
********** PART 1 **********
SOLUTION:  352997 317
********** PART 2 **********
SOLUTION:  101571302 466
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


################
# Solution One #
################


def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_seven.txt")

    x_pos = [int(line) for line in lines]

    # print("Size: ", len(x_pos))
    # print("Min: ", min(x_pos))
    # print("Max: ", max(x_pos))
    # print("Median: ", int((max(x_pos) - min(x_pos))/2))
    # print("Avg: ", int(sum(x_pos)/len(x_pos)))

    total_fuel = []
    for target_pos in range(min(x_pos), max(x_pos) + 1):
        current_fuel = []

        for current_pos in x_pos:
            current_fuel.append(abs(target_pos - current_pos))

        total_fuel.append(sum(current_fuel))

    fuel_spent = min(total_fuel)
    final_pos = total_fuel.index(fuel_spent)

    print("SOLUTION: ", fuel_spent, final_pos)


################
# Solution TWO #
################


def solution_two():
    print("********** PART 2 **********")

    lines = read_input("inputs/day_seven.txt")

    x_pos = [int(line) for line in lines]

    total_fuel = []
    for target_pos in range(min(x_pos), max(x_pos) + 1):
        current_fuel = []

        for current_pos in x_pos:
            offset = abs(target_pos - current_pos)
            cost = sum(range(offset +1))
            current_fuel.append(cost)

        total_fuel.append(sum(current_fuel))

    fuel_spent = min(total_fuel)
    final_pos = total_fuel.index(fuel_spent)

    print("SOLUTION: ", fuel_spent, final_pos)


if __name__ == "__main__":
   solution_one()
   solution_two()