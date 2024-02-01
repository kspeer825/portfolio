# My IDE
My IDE of choice is emacs. I run it in the terminal and use tmux sessions for everything else.

Tools:
 - [Emacs](https://emacsrocks.com/)
 - [tmux](https://github.com/tmux/tmux/tree/master?tab=readme-ov-file#welcome-to-tmux)
 - [iTerm2](https://iterm2.com/)

## Why Emacs?
I started using emacs at my first job out of college, as a QA Engineer. It was the editor that all the devs used and becoming proficient in it made it much easier to pair program with them. It is definitely a huge pain in the ass when you first starting learning. But it's an incredibly powerful tool, and if you take the time, it can greatly increase your productivity. If you like looking at pleasing UI's and using your mouse then you might not get a ton of satisfaction out of it. But if you like the idea of being able to program functionality and never leaving your terminal screen, then maybe you will. Honestly I think at this point most of emacs can be emulated in VSCode so that's probably the better option for most...but I'll stick with it for now.

The coolest feature of emacs is that It has it's own programming language [elisp](https://www.gnu.org/software/emacs/manual/html_node/eintr/index.html) which can be used to extend fucntionality of the editor. The maintainers of elisp docs even claim you can treat it like a first class programming language, although I've never done anything with it outside of my `init.el`.

If it sounds like too much, there are a ton of [packages](https://melpa.org/#/) available to get you started:
  - [projectile](https://github.com/bbatsov/projectile) for navigating your local files
  - [magit](https://github.com/magit/magit) a builtin git client
  - [ag](https://github.com/Wilfred/ag.el/#agel) similar to grep
  - [tramp](https://www.gnu.org/software/tramp/) for remote file editing
  - [smex](https://github.com/nonsequitur/smex/) because you can only remember so many shortcut combos


There are also major modes for almost every programming language.

## Why tmux?
Again, this was just what everyone was using at my first job and it has stuck. It's a terminal multiplexer allowing you to organize many terminals in ephemeral sessions. Each session contains one or more windows and each window contains one or more panes, all of which are just isolated shells.

Similar to emacs it has a slew of esoteric controls that are a pain to learn, but if conquered can greatly improve efficiency when iterating locally. One of the most useful features is that you can script out the creation of sessions and windows. For example, say you have a micro-service stack that you want to spin up locally, you could have a single tmux script that creates a sesion, and then onfigures and launches each service in a new window. Generally any time I find that I am consistently running the same commands to stand up a local enviornment, I will throw those commands into a tmux script so that I can stand up one-off sessions for local tasks.

Switching between sessions and panes is fast, and you can even preview all your sessions at once.

![screenshot](/projects/my_ide/iterm_screenshot.png?raw=true)

Tmux also just works really well with emacs, if you're already in a terminal why leave?
