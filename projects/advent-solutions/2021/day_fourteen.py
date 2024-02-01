"""
MY SOLUTION:
[root@colima src]# make solve day=fourteen
********** PART 1 **********
SOLUTION:  3009
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

    lines = read_input("inputs/day_fourteen.txt")
    template = list(lines[0])
    insertions = [line.split(" -> ") for line in lines[2:]]
    #print(insertions)
    #print("".join(template))

    for step in range(10):
        new_template = []
        for i in range(0, len(template) -1):
            one = template[i]
            two = template[i+1]
            new_one = [insertion[1] for insertion in insertions
                       if str(one) + str(two) == insertion[0]][0]
            new_template += [one,new_one]
        new_template.append(two)
        template = new_template.copy()
        #print("Step: ", step, "\n", "".join(new_template))

    counts = {element: new_template.count(element) for element in set(new_template)}
    # print(counts)
    max_element = [value for value in counts.values() if value == max(list(counts.values()))][0]
    min_element = [value for value in counts.values() if value == min(list(counts.values()))][0]
    print("SOLUTION: ", max_element - min_element)

################
# Solution TWO #
################

def solution_two():
    print("********** PART 2 **********")

    lines = read_input("inputs/day_fourteen.txt")

    print("SOLUTION: ", "TODO")


if __name__ == "__main__":
   solution_one()
   solution_two()