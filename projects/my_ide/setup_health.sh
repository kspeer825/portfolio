#!/bin/bash

# Health Checks
echo "Checking packages..."

# Homebrew
command -v brew >/dev/null 2>&1 || echo "❌ Homebrew is missing. "
echo "✅ $(brew --version | head -1)"

# Emacs
command -v emacs >/dev/null 2>&1 || echo "❌ Emacs is missing. "
echo "✅ $(emacs --version | head -1)"

# tmux
command -v tmux >/dev/null 2>&1 || echo "❌ tmux is missing. "
echo "✅ $(tmux -V)"

# container tools
command -v docker --version >/dev/null 2>&1 || echo "❌ docker is missing. "
echo "✅ $(docker --version)"

command -v colima >/dev/null 2>&1 || echo "❌ colima is missing. "
echo "✅ $(colima --version)"

command -v k9s version >/dev/null 2>&1 || echo "❌ k9s is missing. "
echo "✅ $(k9s version | grep -i version)"

command -v kubectl version >/dev/null 2>&1 || echo "❌ kubectl is missing. "
echo "✅ $(kubectl version | grep -i client)"

echo "All Checks Passed."
