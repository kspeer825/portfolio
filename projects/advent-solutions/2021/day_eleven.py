"""
MY SOLUTION:
[root@colima src]# make solve day=eleven
********** PART 1 **********
SOLUTION:  1729
********** PART 2 **********
SOLUTION:  TODO!
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
        for line in lines:
            parsed_lines.append([int(value) for value in list(line.rstrip())])

    return parsed_lines

def display_energy(energy_field: list):
    for row in energy_field:
        print(row)

def increment(value: int):
    if value == 9:
        return 0
    return value + 1

def get_adjacent_coordinates(x: int, y: int, grid_size: int):
    upper_bound = grid_size -1

    # top left corner
    if x == 0 and y == 0:
        return [
            [0, 1],
            [1, 0],
            [1, 1]
        ]
    # bottom left corner
    elif x == 0 and y == upper_bound:
        return [
            [0, upper_bound - 1],
            [1, upper_bound],
            [1, upper_bound - 1],
        ]
    # top right corner
    elif x == upper_bound and y == 0:
        return [
            [upper_bound - 1, 0],
            [upper_bound, 1],
            [upper_bound - 1, 1],
        ]
    # bottom right corner
    elif x == upper_bound and y == upper_bound:
        return [
            [upper_bound - 1, upper_bound],
            [upper_bound, upper_bound - 1],
            [upper_bound - 1, upper_bound - 1],
        ]
    # left edge
    elif x == 0:
        return [
            [0, y - 1],
            [0, y + 1],
            [1, y - 1],
            [1, y],
            [1, y + 1],
        ]
    # right edge
    elif x == upper_bound:
        return [
            [upper_bound, y - 1],
            [upper_bound, y + 1],
            [upper_bound - 1, y - 1],
            [upper_bound - 1, y],
            [upper_bound - 1, y + 1],
        ]
    # top edge
    elif y == 0:
        return [
            [x - 1, 0],
            [x + 1, 0],
            [x - 1, 1],
            [x, 1],
            [x + 1, 1],
        ]
    # bottom edge
    elif y == upper_bound:
        return [
            [x - 1, upper_bound - 1],
            [x, upper_bound - 1],
            [x + 1, upper_bound - 1],
            [x - 1, upper_bound],
            [x + 1, upper_bound],
        ]
    # non-boundary pt
    else:
        return [
            [x - 1, y - 1],
            [x - 1, y ],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y ],
            [x + 1, y + 1],
        ]

################
# Solution One #
################

steps = 100

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_eleven.txt")

    flashes = 0

    # display_energy(lines)

    grid_size = len(lines)
    for step in range(1, steps+1):

        flashing_coordinates = []

        # inital update
        for y in range(len(lines)):
            for x in range(len(lines[y])):
                energy_value = increment(lines[y][x])
                lines[y][x] = energy_value
                if energy_value == 0:
                    flashes += 1
                    flashing_coordinates.append([x, y])

        # subsequent updates
        while len(flashing_coordinates) > 0:
            coordinates = flashing_coordinates.pop()
            x = coordinates[0]
            y = coordinates[1]

            # update all adjacent values that are not zero
            adj_coordinates = get_adjacent_coordinates(x, y, grid_size)
            for adj_pt in adj_coordinates:
                adj_x = adj_pt[0]
                adj_y = adj_pt[1]

                # don't increment if already flashed
                if lines[adj_y][adj_x] == 0:
                     continue

                energy_value = increment(lines[adj_y][adj_x])
                lines[adj_y][adj_x] = energy_value
                if energy_value == 0:
                    flashes += 1
                    flashing_coordinates.insert(0, [adj_x, adj_y])

        # print("Step: ", step)
        # print("Flashes: ", flashes)
        # display_energy(lines)

    print("SOLUTION: ", flashes)

################
# Solution TWO #
################
def solution_two():
    print("********** PART 2 **********")
    lines = read_input("inputs/day_eleven.txt")

    print("SOLUTION: ", "TODO!")


if __name__ == "__main__":
   solution_one()
   solution_two()