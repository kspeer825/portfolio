"""
MY SOLUTION:
[root@colima src]# make solve day=nine
********** PART 1 **********
SOLUTION:  550
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
            parsed_lines.append(line.rstrip())

    return parsed_lines


################
# Solution One #
################

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_nine.txt")
    height_map = [list(line) for line in lines]

    low_points = []

    # identifying low points for all areas except top and bottom edges
    for row in range(1, len(height_map)-1):
        prev_row = height_map[row-1]
        current_row = height_map[row]
        next_row = height_map[row+1]

        for col in range(len(current_row)):
            if col == 0:
                # first column adjacent = [right, up, down]
                adjacent = [current_row[col+1], prev_row[col], next_row[col]]
            elif col == len(current_row) - 1:
                # last column adjacent = [left, up, down]
                adjacent = [current_row[col-1], prev_row[col], next_row[col]]
            else:
                # in between adjacent = [left, right, up, down]
                adjacent = [current_row[col-1], current_row[col+1], prev_row[col], next_row[col]]

            point = current_row[col]

            if all([int(point) < int(adj_pt) for adj_pt in adjacent]):
                low_points.append(int(point))

    # account for top edge
    current_row = height_map[0]
    next_row = height_map[1]
    for col in range(len(current_row)):
        if col == 0:
            # first column adjacent = [right, down]
            adjacent = [current_row[col+1], next_row[col]]
        elif col == len(current_row) - 1:
            # last column adjacent = [left, down]
            adjacent = [current_row[col-1], next_row[col]]
        else:
            # in between adjacent = [left, right, up, down]
            adjacent = [current_row[col-1], current_row[col+1], next_row[col]]

        point = current_row[col]

        if all([int(point) < int(adj_pt) for adj_pt in adjacent]):
            low_points.append(int(point))

    # account for bottom edge
    prev_row = height_map[-2]
    current_row = height_map[-1]
    for col in range(len(current_row)):
        if col == 0:
            # first column adjacent = [right, up]
            adjacent = [current_row[col+1], prev_row[col]]
        elif col == len(current_row) - 1:
            # last column adjacent = [left, up]
            adjacent = [current_row[col-1], prev_row[col]]
        else:
            # in between adjacent = [left, right, up]
            adjacent = [current_row[col-1], current_row[col+1], prev_row[col]]

        point = current_row[col]

        if all([int(point) < int(adj_pt) for adj_pt in adjacent]):
            low_points.append(int(point))

    risk_level = sum([pt + 1 for pt in low_points])
    print("SOLUTION: ", risk_level)


################
# Solution TWO #
################
def solution_two():
    print("********** PART 2 **********")
    lines = read_input("inputs/day_nine.txt")

    print("SOLUTION: ", "TODO!")


if __name__ == "__main__":
   solution_one()
   solution_two()