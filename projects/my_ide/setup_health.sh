#!/bin/bash

# Health Checks


# Homebrew
command -v brew >/dev/null 2>&1 || echo "❌ Homebrew is missing. "
echo "✅ $(brew --version | head -1)"

# Emacs
command -v emacs >/dev/null 2>&1 || echo "❌ Emacs is missing. "
echo "✅ $(emacs --version | head -1)"

# tmux
command -v tmux >/dev/null 2>&1 || echo "❌ tmux is missing. "
echo "✅ $(tmux -V)"

echo "All Checks Passed."
