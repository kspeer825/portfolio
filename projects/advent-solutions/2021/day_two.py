"""
MY SOLUTION:

[root@colima src]# make solve day=two
********** PART 1 **********
Final Position:  {'x': 2003, 'y': 980}
Solution:  1962940
********** PART 2 **********
Final Position:  {'x': 2003, 'y': 905474, 'z': 980}
Solution:  1813664422
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
        parsed_lines = [
            [line.split(" ")[0], int(line.split(" ")[1])]
            for line in lines
        ]

    return parsed_lines



def solution_one():
    print("********** PART 1 **********")

    change = {
        "forward": {"x": 1},
        "up": {"y": -1},
        "down": {"y": 1}
    }

    vectors = read_input("inputs/day_two.txt")

    position = {
        "x": 0, # horizontal position
        "y": 0 # depth
    }

    for vector in vectors:
        heading = vector[0]

        for axis, direction in change[heading].items():
            updated_postion = position[axis] + (direction * vector[1])
            position.update({axis: updated_postion})

    print("Final Position: ", position)
    print("Solution: ", position["x"]*position["y"])

def solution_two():
    print("********** PART 2 **********")

    change = {
        "forward": {"x": 1, "y": 1},
        "up": {"z": -1},
        "down": {"z": 1}
    }

    vectors = read_input("inputs/day_two.txt")

    position = {
        "x": 0, # horizontal position
        "y": 0, # depth
        "z": 0, # aim
    }

    for vector in vectors:
        heading = vector[0]

        for axis, direction in change[heading].items():
            if heading == "forward" and axis == "y":
                updated_postion = position[axis] + (vector[1] * position["z"])
            else:
                updated_postion = position[axis] + (direction * vector[1])

            position.update({axis: updated_postion})

    print("Final Position: ", position)
    print("Solution: ", position["x"]*position["y"])


if __name__ == "__main__":
   solution_one()
   solution_two()