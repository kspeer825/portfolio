"""
MY SOLUTION:
TODO
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
"""
If a chunk opens with (, it must close with ).
If a chunk opens with [, it must close with ].
If a chunk opens with {, it must close with }.
If a chunk opens with <, it must close with >.
"""
closed_metadata = {
    ")": {"points": 3, "count": 0},
    "]": {"points": 57, "count": 0},
    "}": {"points": 1197, "count": 0},
    ">": {"points": 25137, "count": 0},
}
closed_to_open = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
}

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_ten.txt")

    for line in lines:
        chunk = []
        open_metadata = {
            "(": False,
            "[": False,
            "{": False,
            "<": False,
        }

        for char in line:

            if char in set(open_metadata.keys()):
                # open a new chunk
                open_metadata[char] = True
                chunk.append(char)
                continue

            elif len(chunk) > 0 \
                 and char in set(closed_metadata.keys()) \
                 and closed_to_open[char] == chunk[-1]:
                # close an existing chunk
                _ = chunk.pop()
                continue

            # corrupted line
            closed_metadata[char]["count"] += 1
            break

    print(closed_metadata)
    score = sum([md["points"] * md["count"]
                 for md in closed_metadata.values()])
    print("SOLUTION: ", score)

################
# Solution TWO #
################
def solution_two():
    print("********** PART 2 **********")
    lines = read_input("inputs/day_ten.txt")

    print("SOLUTION: ", "TODO!")


if __name__ == "__main__":
   solution_one()
   solution_two()