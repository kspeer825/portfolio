# Advent of Code 2021 Solutions
Advent of Code [2021](https://adventofcode.com/2021)

Each year I try to complete the latest [advent calendar](https://adventofcode.com/2021/about) using a languge that is new to me, or that I want more practice in.

This year I used Python.

## Soutions
The solutions for each day are located in the corresponding .py file i.e. Dec 1st -> day_one.py

| Day  | Inputs | Solution |
| ----- | -------- | ------ |
| 1  | inputs/day_one.txt | day_one.py |
| 2  | inputs/day_two.txt | day_two.py |
| 3  | inputs/day_three.txt | day_three.py |
| 4  | inputs/day_four.txt | day_four.py |
| 5  | inputs/day_five.txt | day_five.py |

## Execution
Build container
```
make docker-build
```
Execute solution
```
make solve day=<[one,two,twenty_five,etc]>
```

## Requirements
 - [GNU Make](https://www.gnu.org/software/make/manual/make.html#Simple-Makefile)
 - Docker and its runtime env like Docker Desktop or [Colima](https://github.com/abiosoft/colima?tab=readme-ov-file#getting-started)
