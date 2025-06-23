#!/bin/bash

echo "⚙️  Configuring zsh..."
rm -f ~/.zshrc
ln -s /Users/$USER/git/personal/portfolio-my_ide/projects/my_ide/configs/zshrc ~/.zshrc

echo "⚙️  Installing package manager for mac..."
command -v brew >/dev/null 2>&1 || \
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$(whoami)/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

echo "⚙️  Installing a terminal..."
brew install --cask iterm2

echo "⚙️  Installing and configuring an editor..."
brew install emacs
rm -f ~/.emacs.d/init.el
ln -s /Users/$USER/git/personal/portfolio-my_ide/projects/my_ide/configs/init.el ~/.emacs.d/init.el

echo "⚙️  Installing and configuring a terminal multiplexer..."
brew install tmux
rm -f ~/.tmux.conf
ln -s /Users/$USER/git/personal/portfolio-my_ide/projects/my_ide/configs/tmux.conf ~/.tmux.conf

echo "⚙️  Installing aws cli..."
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

echo "⚙️  Installing various contianer tooling..."
brew install docker
brew install docker-compose
brew install colima
brew install k9s
brew install kubectl
curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-darwin-$(uname -m)
sudo install minikube-darwin-$(uname -m) /usr/local/bin/minikube

echo "⚙️  Installing browser..."
brew install yarn

echo "⚙️  Installing browser..."
brew install --cask brave-browser

echo "⚙️  Verifying dependencies..."
source ./portfolio-my_ide/projects/my_ide/setup_health.sh
