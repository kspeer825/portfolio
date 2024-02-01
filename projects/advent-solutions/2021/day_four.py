from copy import deepcopy

"""
MY SOLUTION:

[root@colima src]# make solve day=four
********** PART 1 **********
Total 766
Number 95
-------------------------
['55', '15', '85', '39', '4']
['X', 'X', 'X', 'X', 'X']
['X', '47', '61', '9', '66']
['82', '32', 'X', 'X', '16']
['50', '96', '14', '60', '35']
-------------------------
SOLUTION:  72770
********** PART 2 **********
Total 296
Number 47
-------------------------
['X', 'X', 'X', 'X', 'X']
['X', '5', 'X', 'X', 'X']
['X', '67', 'X', 'X', 'X']
['X', 'X', '96', 'X', 'X']
['X', '59', 'X', '54', '15']
-------------------------
SOLUTION:  13912
"""

MARKED = "X"

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

def parse_boards(values: list):
    number_of_boards = len([value for value in values if value == ""])
    boards = {key: [] for key in range(number_of_boards)}

    index = 0
    for value in values[2:]:

        if value == "":
            index +=1
            continue

        trimmed_value = value.replace("  ", " ")
        boards[index].append(trimmed_value.split(" "))

    return boards

def get_matching_indices(values: list, target_value: str):
    indices = []

    index = 0
    for value in values:
        if value == target_value:
            indices.append(index)
        index += 1

    return indices

def bingo(values: list):
    width = len(values[0])
    height = len(values)

    horizontal_match = [MARKED for _ in range(width)]
    vertical_match = [MARKED for _ in range(height)]

    row_index = 0
    for row in values:
        if row == horizontal_match:
            return True

        column_index = 0
        for item in range(width):
            column = [row[column_index] for row in values]
            if column == vertical_match:
                return True

            column_index += 1

        row_index += 1

    return False

def find_winning_board(boards, called_numbers):
    for number in called_numbers:
        # print("CALLED: ", number)

        for board_index, board in boards.items():

            for row in board:

                indices = get_matching_indices(row, number)
                for index in indices:
                    row[index] = MARKED

            if bingo(board):
                # print("BINGO!")
                return board, int(number), board_index

    raise RuntimeError("No boards had Bingo")

def pretty_print_board(board):
    print("-"*25)
    for row in board:
        print(row)
    print("-"*25)

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_four.txt")

    called_numbers = lines[0].split(",")
    boards = parse_boards(lines)

    winning_board, winning_number, _ = find_winning_board(boards, called_numbers)

    total = 0
    for row in winning_board:
        total += sum([int(number)
                      for number in row
                      if number != MARKED])

    print("Total", total)
    print("Number", winning_number)
    pretty_print_board(winning_board)
    print("SOLUTION: ", total * winning_number)

def solution_two():
    print("********** PART 2 **********")

    lines = read_input("inputs/day_four.txt")

    called_numbers = lines[0].split(",")
    boards = parse_boards(lines)

    remaining_boards = deepcopy(boards)

    while len(remaining_boards.keys()) > 0:
        board_to_remove, winning_number, index = find_winning_board(remaining_boards, called_numbers)
        del remaining_boards[index]

    total = 0
    for row in board_to_remove:
        total += sum([int(number)
                      for number in row
                      if number != MARKED])

    print("Total", total)
    print("Number", winning_number)
    pretty_print_board(board_to_remove)
    print("SOLUTION: ", total * winning_number)


if __name__ == "__main__":
   solution_one()
   solution_two()