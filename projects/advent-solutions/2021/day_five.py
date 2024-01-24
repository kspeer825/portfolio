"""
MY SOLUTION:
[root@colima src]# make solve day=five
********** PART 1 **********
SOLUTION:  3990
********** PART 2 **********
SOLUTION:  21305
"""

def read_input(filePath: str):
    """
    Read and parse input file.

    :params filePath: path to file input

    :return: an array of arrays representing vectors [["direction", integer-magnitude]]
    """

    parsed_lines = []

    with open(filePath, "r") as inputFile:
        lines = inputFile.readlines()
        parsed_lines = [line.strip() for line in lines]

    return parsed_lines

def parse_lines(lines: list):
    """
    Read lines and parse into coordinates. Each line is a string of the form "x1,y1 -> x2,y2"

    :params lines: list of strings representing coordinates
    :return: list of coordinates where ea. coordinate is like [[int(x1), int(y1)],[int(x2), int(y2)]]
    """
    coordinates = []

    for line in lines:
        values = line.split(" -> ")

        primary = [int(value) for value in values[0].split(",")]
        secondary = [int(value) for value in values[1].split(",")]

        coordinates.append([primary, secondary])

    return coordinates

def get_max(axis: int, coordinates: list):
    """
    Read lines and parse into coordinates. Each line is a string of the form "x1,y1 -> x2,y2"

    :params axis: an integer where 0 represents x and 1 represents y
    :params coordinates: list of coordinates

    :return: max integer in list
    """
    if axis not in [0,1]:
        raise RuntimeError("axis must be integer 0, or 1")

    max_value = 0
    for coordinate in coordinates:
        max_value = max([coordinate[0][axis], coordinate[1][axis], max_value])

    return max_value


def print_diagram(diagram: list):
    """
    This is just a convenience function for printing out the diagram
    to look like the example they provide. Good for sanity checking
    """

    for row in diagram:

        row_as_pretty_string = ""

        for value in row:

            if value == 0:
                row_as_pretty_string += "."
                continue

            row_as_pretty_string += str(value)

        print(row_as_pretty_string)


def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_five.txt")
    coordinates = parse_lines(lines)

    max_x = get_max(0, coordinates) + 1
    max_y = get_max(1, coordinates) + 1

    diagram = [
        [0 for _ in range(max_x)]
        for _ in range(max_y)
    ]

    for pair in coordinates:
        x1, y1 = pair[0]
        x2, y2 = pair[1]

        if x1 != x2 and y1 != y2:
            continue

        elif x1 == x2 and y1 == y2:
            raise RuntimeError("That's not a line, it's a point!")

        elif x1 == x2:
            step = 1 if y1 < y2 else -1
            for y in range(y1, y2 + step, step):
                diagram[y][x1] += 1

        elif y1 == y2:
            step = 1 if x1 < x2 else -1
            for x in range(x1, x2 + step, step):
                diagram[y1][x] += 1

        else:
            raise RuntimeError("You are terrible at conditionals!")

    # print_diagram(diagram)

    overlapping_points_count = len([
        value
        for row in diagram
        for value in row
        if value >= 2
    ])

    print("SOLUTION: ", overlapping_points_count)


def solution_two():
    print("********** PART 2 **********")


    lines = read_input("inputs/day_five.txt")
    coordinates = parse_lines(lines)

    max_x = get_max(0, coordinates) + 1
    max_y = get_max(1, coordinates) + 1

    diagram = [
        [0 for _ in range(max_x)]
        for _ in range(max_y)
    ]

    for pair in coordinates:
        x1, y1 = pair[0]
        x2, y2 = pair[1]

        if x1 == x2 and y1 == y2:
            raise RuntimeError("That's not a line, it's a point!")

        # vertical line
        elif x1 == x2:
            step = 1 if y1 < y2 else -1
            for y in range(y1, y2 + step, step):
                diagram[y][x1] += 1

        # horizontal line
        elif y1 == y2:
            step = 1 if x1 < x2 else -1
            for x in range(x1, x2 + step, step):
                diagram[y1][x] += 1

        # diagonal line
        elif abs(x1 - x2) == abs(y1 - y2):
            x_step = 1 if x1 < x2 else -1
            y_step = 1 if y1 < y2 else -1
            try:
                for x, y in zip(range(x1, x2 + x_step, x_step), range(y1, y2 + y_step, y_step)):
                    diagram[y][x] += 1
            except IndexError:
                print(x1, y1)
                print(x2, y2)
                print(x, y)
                exit()
    # print_diagram(diagram)

    overlapping_points_count = len([
        value
        for row in diagram
        for value in row
        if value >= 2
    ])

    print("SOLUTION: ", overlapping_points_count)


if __name__ == "__main__":
   solution_one()
   solution_two()