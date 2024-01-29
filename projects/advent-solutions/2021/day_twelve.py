"""
MY SOLUTION:
[root@colima src]# make solve day=twelve
********** PART 1 **********
         hl     ->       ['WP', 'dz', 'WW', 'QW']
         WP     ->       ['hl', 'start', 'ps', 'fo', 'dz']
         vl     ->       ['fo', 'WW', 'QW', 'ps', 'start']
         fo     ->       ['vl', 'wy', 'end', 'VH', 'WP', 'QW']
         WW     ->       ['vl', 'dz', 'hl']
         start  ->       ['WP', 'ps', 'vl']
         QW     ->       ['vl', 'end', 'hl', 'fo', 'dz']
         wy     ->       ['fo']
         dz     ->       ['WW', 'hl', 'FN', 'WP', 'QW', 'ps']
         end    ->       ['fo', 'QW', 'FN']
         VH     ->       ['fo']
         ps     ->       ['vl', 'WP', 'start', 'dz']
         FN     ->       ['dz', 'end']
SOLUTION:  3410
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
            parsed_lines.append(line.strip().split('-'))

    return parsed_lines

def display_map(dictionary: dict):
    for key, value in dictionary.items():
        print("\t", key, "\t->\t", value)

################
# Solution One #
################

def get_routes(mapping: dict, current_cave: str, visited: frozenset):

    visited |= {current_cave}

    routes = 0
    for cave in mapping[current_cave]:

        if cave == "end":
            routes += 1

        elif cave.lower() not in visited:
            routes += get_routes(mapping, cave, visited)

    return routes


def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_twelve.txt")
    mapping = {item: []
               for line in lines
               for item in line}
    for line in lines:
        a, b = line
        mapping[a] += [b]
        mapping[b] += [a]

    display_map(mapping)

    all_routes = get_routes(mapping, "start", frozenset())

    print("SOLUTION: ", all_routes)

################
# Solution TWO #
################
def solution_two():
    print("********** PART 2 **********")

    lines = read_input("inputs/day_twelve.txt")

    print("SOLUTION: ", "TODO")


if __name__ == "__main__":
   solution_one()
   solution_two()