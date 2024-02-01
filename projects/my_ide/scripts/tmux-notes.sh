#!/bin/bash

# Just emacs and some private repos
session=notes
tmux new-session -d -s $session

# emacs
window=0
tmux rename-window -t $session:$window 'emacs'
tmux send-keys -t $session:$window 'emacs ' C-m

# learning
root=~/git/
window=1
tmux new-window -t $session:$window -n 'learning'
tmux send-keys -t $session:$window 'cd ' $root 'learning' Enter
tmux send-keys -t $session:$window 'git status' Enter

# my ide
window=2
tmux new-window -t $session:$window -n 'my_ide'
tmux send-keys -t $session:$window 'cd ' $root 'my_idea' Enter
