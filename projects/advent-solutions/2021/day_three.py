"""
MY SOLUTION:

[root@colima src]# make solve day=three
********** PART 1 **********
Gamma:  101000101001 2601
Epsilon:  010111010110 1494
Solution:  3885894
********** PART 2 **********
Oxygen Rating:  111010111111 3775
CO2 Rating:  010010000111 1159
Solution:  4375225
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


def most_common_bit(values: list, position: int):
    total = sum([int(value[position]) for value in values])

    if total >= len(values) / 2:
        return "1"

    return "0"

def solution_one():
    print("********** PART 1 **********")

    binary_values = read_input("inputs/day_three.txt")

    number_of_values = len(binary_values)
    bits_per_value = len(binary_values[0])

    gamma = ""
    epsilon = ""

    for index in range(bits_per_value):

        if most_common_bit(binary_values, index) == "1":
            gamma += "1"
            epsilon += "0"
        else:
            gamma += ("0")
            epsilon += ("1")

    print("Gamma: ", gamma, int(gamma, 2))
    print("Epsilon: ", epsilon, int(epsilon, 2))
    print("Solution: ", int(gamma,2)*int(epsilon,2))


def least_common_bit(values: list, position: int):
    total = sum([int(value[position]) for value in values])

    if total < len(values) / 2:
        return "1"

    return "0"

def is_reduced(values: list):
    if len(values) == 1 or len(set(values)) == 1:
        return True
    return False

def filter_oxygen(values: list):
    reduction = values.copy()
    bit_length = len(values[0])

    for bit in range(bit_length):

        common_bit = most_common_bit(values, bit)

        for value in values:
            if value[bit] != common_bit and value in reduction:
                reduction.remove(value)

                if is_reduced(reduction):
                    return reduction

        values = reduction.copy()


    raise RuntimeError("Oxygen filtering has failed")

def filter_co2(values: list):
    reduction = values.copy()
    bit_length = len(values[0])

    for bit in range(bit_length):

        uncommon_bit = least_common_bit(values, bit)

        for value in values:
            if value[bit] != uncommon_bit and value in reduction:
                reduction.remove(value)

                if is_reduced(reduction):
                    return reduction

        values = reduction.copy()

    raise RuntimeError("CO2 filtering has failed")


def solution_two():
    print("********** PART 2 **********")

    binary_values = read_input("inputs/day_three.txt")

    oxygen_filtered = filter_oxygen(binary_values)
    co2_filtered = filter_co2(binary_values)

    co2 = co2_filtered[0]
    oxygen = oxygen_filtered[0]

    print("Oxygen Rating: ", oxygen, int(oxygen, 2))
    print("CO2 Rating: ", co2, int(co2, 2))
    print("Solution: ", int(oxygen, 2) * int(co2, 2))


if __name__ == "__main__":
   solution_one()
   solution_two()