#!/bin/bash
session=$1

tmux new-session -d -s $session

# emacs
window=0
tmux rename-window -t $session:$window 'emacs'
tmux send-keys -t $session:$window 'emacs ' C-m

# mono-root
git_root=~/git
window=1
tmux new-window -t $session:$window -n 'exp-root'
tmux send-keys -t $session:$window 'cd ' $exp_root Enter
# tmux send-keys -t $session:$window 'git clone git@github.com:<slug>.git .' Enter
