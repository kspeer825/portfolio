"""
MY SOLUTION:
[root@colima src]# make solve day=thirteen
********** PART 1 **********
SOLUTION:  618
********** PART 2 **********
SOLUTION:  TODO
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
            parsed_lines.append(line.strip())

    return parsed_lines

################
# Solution One #
################

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_thirteen.txt")
    folds = []
    points = []
    for line in lines:
        if not line: # empty
            continue
        elif line.startswith("fold"):
            fold = line.split("fold along ")[1]
            if "x" in fold:
                folds.append([0, int(fold.split("=")[1])])
            else: # "y"
                folds.append([1, int(fold.split("=")[1])])
            continue
        points.append([int(val) for val in line.split(',')])

    first_fold = folds[0][1]
    fold_index = folds[0][0]

    removed_points = []
    transposed_points = []
    for point in points:
        target_point = point[fold_index]

        if target_point == first_fold:
            removed_points.append(point)

        elif target_point > first_fold:
            one = first_fold - (target_point - first_fold)
            if fold_index == 0:
                new_point = [one, point[1]]
            else:
                new_point = [point[0], one]
            transposed_points.append(new_point)
            removed_points.append(point)

    count = 0
    for point in transposed_points:
        if point not in points:
            count +=1
    count += len(points) - len(removed_points)
    print("SOLUTION: ", count)

################
# Solution TWO #
################

def solution_two():
    print("********** PART 2 **********")

    lines = read_input("inputs/day_thirteen.txt")

    print("SOLUTION: ", "TODO")


if __name__ == "__main__":
   solution_one()
   solution_two()