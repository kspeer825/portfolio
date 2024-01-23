"""
MY SOLUTION:

[root@colima src]# make solve day=one
********** PART 1 **********
Increases:  1529
********** PART 2 **********
Increases:  1567
"""


def count_increases(values: list):
    """
    Iterate through list of values counting each instance of an increase in value
    from one item to the next.

    :params values: a list of integers
    :return: number of increases
    """

    index = 1
    increases = 0

    while index < len(values):

        if values[index] > values[index -1]:
            increases += 1

        index += 1

    return increases


def solution_one():
    print("********** PART 1 **********")

    # Read and parse input file
    inputFile = open("inputs/day_one.txt", "r")
    values = inputFile.readlines()
    int_values = [int(value.strip()) for value in values]

    # Iterate through list of values counting each instance of an increase in value
    increases = count_increases(int_values)
    print("Increases: ", increases)

    # Cleanup
    inputFile.close()


def solution_two():
    print("********** PART 2 **********")

    # Read and parse input file
    inputFile = open("inputs/day_one.txt", "r")
    values = inputFile.readlines()
    int_values = [int(value.strip()) for value in values]

    # Generate new list of 3 value sliding sums
    sum_values = []
    for index in range(len(int_values) - 2):
        sum_values.append(
            sum(int_values[index:index+3])
        )

    # Counting each instance of an increase in value
    increases = count_increases(sum_values)
    print("Increases: ", increases)

    # Cleanup
    inputFile.close()


if __name__ == "__main__":
   solution_one()
   solution_two()