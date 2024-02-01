#!/bin/bash


# Install package manager for mac

command -v brew >/dev/null 2>&1 || \
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$(whoami)/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Install a terminal
brew install --cask iterm2
# Configure terminal
# TODO

# Install an editor
brew install emacs
# Configure editor
# TODO

# Install a multiplexer
brew install tmux
# Configure multiplexer
# TODO

# Install a global key-mapper
brew install --cask karabiner-elements
# Configure key-mapper
# TODO

# Install Brave
brew install --cask brave-browser
# Configure browser
# TODO


# Ensure setup was successful
echo "To validate setup execute the following:
  open iTerm.app
  bash my_ide-main/setup_health.sh"
