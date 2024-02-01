"""
MY SOLUTION:
[root@colima src]# make solve day=eight
********** PART 1 **********
SOLUTION:  539
********** PART 2 **********
SOLUTION:  1084606
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
            parsed_lines.append(line.rstrip().split("|"))

    return parsed_lines


################
# Solution One #
################

"""
  0:      1:      2:      3:      4:
 aaaa    ....    aaaa    aaaa    ....
b    c  .    c  .    c  .    c  b    c
b    c  .    c  .    c  .    c  b    c
 ....    ....    dddd    dddd    dddd
e    f  .    f  e    .  .    f  .    f
e    f  .    f  e    .  .    f  .    f
 gggg    ....    gggg    gggg    ....

  5:      6:      7:      8:      9:
 aaaa    aaaa    aaaa    aaaa    aaaa
b    .  b    .  .    c  b    c  b    c
b    .  b    .  .    c  b    c  b    c
 dddd    dddd    ....    dddd    dddd
.    f  e    f  .    f  e    f  .    f
.    f  e    f  .    f  e    f  .    f
 gggg    gggg    ....    gggg    gggg


digit : chars
-------------
  0   :   6
  1   :   2
  2   :   5
  3   :   5
  4   :   4
  5   :   5
  6   :   6
  7   :   3
  8   :   7
  9   :   6
"""

def solution_one():
    print("********** PART 1 **********")

    lines = read_input("inputs/day_eight.txt")

    # get only the 'output' side
    outputs = [line[1] for line in lines]

    digit_to_num_chars = {
        1: 2,
        4: 4,
        7: 3,
        8: 7,
    }
    count_unique_digits = 0

    for output in outputs:
        segments = output.strip().split(" ")

        for segment in segments:
            if len(segment) in digit_to_num_chars.values():
                count_unique_digits += 1

    print("SOLUTION: ", count_unique_digits)

################
# Solution TWO #
################

"""
 dddd
e    a
e    a
 ffff
g    b
g    b
 cccc
"""

def solution_two_attempt():
    """
    Initial attempt, I tried applying Sudoku style logic to this and got pretty far.
    But it ends up failing to reduce each segment to a single connection character.
    You get multiple segments with 2 possibilities and no way to narrow it down further
    without considering the unique segment makeup of each unique-string-length digit.

    See solution_two() below for the final solution.
    """
    print("********** PART 2 **********")
    lines = read_input("inputs/day_eight.txt")

    # get only the 'output' side
    inputs_outputs = [[line[0].strip().split(" "),
                      line[1].strip().split(" ")]
                      for line in lines]

    print(inputs_outputs[0])

    num_chars_to_digit = {
        2: 1,
        4: 4,
        3: 7,
        7: 8,
    }
    all_digits = []
    for io in inputs_outputs:
        segment_to_digits = dict()
        inputs = io[0]
        outputs = io[1]
        for i in inputs:
            if len(i) in list(num_chars_to_digit.keys()):
                segment_to_digits[i] = num_chars_to_digit[len(i)]

        remaining_segments = set(inputs) - set(segment_to_digits.keys())
        print(remaining_segments)
        print(segment_to_digits)

        connections = {
            "top": {"a","b","c","d","e","f","g"},
            "middle": {"a","b","c","d","e","f","g"},
            "bottom": {"a","b","c","d","e","f","g"},
            "top-left": {"a","b","c","d","e","f","g"},
            "bottom-left": {"a","b","c","d","e","f","g"},
            "top-right": {"a","b","c","d","e","f","g"},
            "bottom-right": {"a","b","c","d","e","f","g"},
        }
        digit_to_positions = {
            0: {"top", "top-right", "bottom-right", "bottom", "top-left", "bottom-left"},
            1: {"top-right", "bottom-right"},
            2: {"top", "top-right", "middle", "bottom-left", "bottom"},
            3: {"top", "top-right", "middle", "bottom-right", "bottom"},
            4: {"top-left", "middle", "top-right", "bottom-right"},
            5: {"top", "top-left", "middle", "bottom-right", "bottom"},
            6: {"top", "top-left", "middle", "bottom-right", "bottom", "bottom-left"},
            7: {"top", "top-right", "bottom-right"},
            8: {"top", "top-right", "top-left", "middle", "bottom-right", "bottom-left", "bottom"},
            9: {"top", "top-left", "top-right", "middle", "bottom-right", "bottom"},
        }
        # reduce possible connections based on unique digits
        for segment, digit in segment_to_digits.items():
            positions = digit_to_positions[digit]
            for position in positions:
                current_chars = connections[position].copy()
                connections[position] = set(segment).intersection(current_chars)

        # applying sudoku-style logic to reduce possibilities further...

        # if N connections only have N chars and N is < len(connections), then
        # remove them from all other potential connections until the point at which
        # all connections have only 1 or 2 potential chars
        while any([len(chars) > 2 for chars in connections.values()]):
            for N in range(1, len(connections.keys())+1):
                if len([conn for conn, chars in connections.items() if len(chars) == N]) >= N:
                    chars_to_remove = [chars for chars in connections.values() if len(chars) == N]
                    for removal in chars_to_remove:

                        for conn in {conn for conn, chars in connections.items()
                                     if len(chars) > N}:
                            current_chars = connections[conn].copy()
                            connections[conn] = current_chars - set(removal)

        print("Connections: ", connections)

        digits = []
        for output in outputs:
            positions = set()
            out_chars = set(output)
            for conn, chars in connections.items():
                if chars.intersection(out_chars):
                    positions.add(conn)
            digits.append([digit for digit, pos in digit_to_positions.items() if positions == pos].pop())

        number = int(''.join([str(digit) for digit in digits]))
        print(number)
        all_digits.append(number)

        # all_digits.append(digits
    print("SOLUTION: ", sum(all_digits))


def get_target_input(inputs: list, target_set: set):
    """
    If a given input contains only 1 more character than the target set
    return that as our target input
    """

    for i in inputs:
        if target_set.issubset(set(i)) and len(target_set) + 1 == len(i):
            return i

def solution_two():
    print("********** PART 2 **********")
    lines = read_input("inputs/day_eight.txt")

    inputs_outputs = [[line[0].strip().split(" "),
                      line[1].strip().split(" ")]
                      for line in lines]

    # note the digits that will have unique length of char-segments
    num_chars_to_digit = {
        2: 1,
        4: 4,
        3: 7,
        7: 8,
    }

    all_numbers = []

    for io in inputs_outputs:

        # use the unique digits to start building a dictionary of
        # digits to segments
        digit_to_segment = dict()
        inputs = io[0]
        outputs = io[1]
        for i in inputs:
            if len(i) in list(num_chars_to_digit.keys()):
                digit_to_segment[num_chars_to_digit[len(i)]] = i

        # initialize connections with all potential char segments
        connections = {
            "top": {"a","b","c","d","e","f","g"},
            "middle": {"a","b","c","d","e","f","g"},
            "bottom": {"a","b","c","d","e","f","g"},
            "top-left": {"a","b","c","d","e","f","g"},
            "bottom-left": {"a","b","c","d","e","f","g"},
            "top-right": {"a","b","c","d","e","f","g"},
            "bottom-right": {"a","b","c","d","e","f","g"},
        }

        # NB: Now reduce possible connections based on knonw segments of the
        #     unique digits 1.4,7,8 as well as the known positions in the shape
        #     of any given diplayed digit...the goal is to isolate a char and
        #     assign it to a position in the display.
        #
        #     e.g. if I know the 'top' char and the chars that make up 4,
        #     I can determine the bottom char, since I know that the shape
        #     of 9 is the only digit with one more segment (the bottom)

        # from 1 and 7 get 'top'
        connections["top"] = set(digit_to_segment[7]) - set(digit_to_segment[1])

        # from 'top', 4, and shape of 9 get 'bottom'
        target_set = connections["top"].union(set(digit_to_segment[4]))
        target_input = get_target_input(inputs, target_set)
        connections["bottom"] = set(target_input) - set(target_set)

        # from 'top', 'bottom', 1, and shape of 3 get 'middle'
        one = set(digit_to_segment[1])
        target_set = one.union(connections['top'].union(connections['bottom']))
        target_input = get_target_input(inputs, target_set)
        connections["middle"] = set(target_input) - set(target_set)

        # from 'top', 'middle', 'bottom', 4 and shape of 8 get 'bottom-left'
        known_connections = connections['top'].union(connections['middle'].union(connections['bottom']))
        target_set = set(digit_to_segment[4]).union(known_connections)
        target_input = get_target_input(inputs, target_set)
        connections["bottom-left"] = set(target_input) - set(target_set)

        # from 'top', 'middle', 'bottom', 'bottom-left', and shape of 2 get 'top-right'
        target_set = connections['top'].union(connections['middle'].union(
            connections['bottom'].union(connections['bottom-left'])
        ))
        target_input = get_target_input(inputs, target_set)
        connections["top-right"] = set(target_input) - set(target_set)

        # from 'top-right' and shape of 1 get 'bottom-right'
        connections["bottom-right"] = set(digit_to_segment[1]) - connections['top-right']

        # from all known connections get the last unkonwn 'top-left'
        known_segments = {list(key)[0] for key in connections.values() if len(key) == 1}
        possible_segments = connections["top-left"].copy()
        connections["top-left"] = possible_segments - known_segments

        # now that all connections are know start building the output digits...

        digit_to_positions = {
            0: {"top", "top-right", "bottom-right", "bottom", "top-left", "bottom-left"},
            1: {"top-right", "bottom-right"},
            2: {"top", "top-right", "middle", "bottom-left", "bottom"},
            3: {"top", "top-right", "middle", "bottom-right", "bottom"},
            4: {"top-left", "middle", "top-right", "bottom-right"},
            5: {"top", "top-left", "middle", "bottom-right", "bottom"},
            6: {"top", "top-left", "middle", "bottom-right", "bottom", "bottom-left"},
            7: {"top", "top-right", "bottom-right"},
            8: {"top", "top-right", "top-left", "middle", "bottom-right", "bottom-left", "bottom"},
            9: {"top", "top-left", "top-right", "middle", "bottom-right", "bottom"},
        }

        digits = []

        for output in outputs:
            positions = set()
            out_chars = set(output)

            # find the positional segments based on ouptut chars
            for char in set(output):
                segment = [segment for segment, chars in connections.items()
                           if set(char) == chars][0]
                positions.add(segment)

            # find the digit that corresponds to the decoded positions and record it
            digits.append([digit for digit, position_set in digit_to_positions.items() if positions == position_set][0])

        # add the 4 digit number to the final output list
        number = int(''.join([str(digit) for digit in digits]))
        all_numbers.append(number)

    print("SOLUTION: ", sum(all_numbers))


if __name__ == "__main__":
   solution_one()
   solution_two()