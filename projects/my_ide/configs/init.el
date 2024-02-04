;; Required pacakges and their installation
(require 'package)
(add-to-list 'package-archives
	     '("melpa-stable" . "https://stable.melpa.org/packages/")
	     t)
(add-to-list 'package-archives
	     '("org" . "https://orgmode.org/elpa/")
	     t)
(package-initialize)
(autoload 'package-pinned-packages "package")
(setq required-packages '(
			  (ag . "melpa-stable")
			  ;; (cider . "melpa-stable") ;; not needed
			  ;; (clojure-mode . "melpa-stable") ;; not needed
			  (magit . "melpa-stable")
			  (projectile . "melpa-stable")
			  (smex . "melpa-stable")
			  (yaml-mode . "melpa-stable")
			  (markdown-mode . "melpa-stable")
			  (tide . "melpa-stable")
			  (company . "melpa-stable")
			  (flycheck . "melpa-stable")
			  (web-mode . "melpa-stable")
			  (go-mode . "melpa-stable")
			  (pandoc-mode . "melpa-stable")
			  (terraform-mode . "melpa-stable")
			  ;;(markdown-mode . "melpa-stable")
			  ;; (typescript-mode . "melpa-stable") ;; installs broken
			  ))
(defun install-required-packages ()
  (interactive)
  (mapc (lambda (package)
	  (message "%s" (car package))
	  (package-install (car package)))
	required-packages))

;; ==== Some standard bindings, aliases, and functions for usability ===

;; Be explicit to kill-emacs
(global-unset-key (kbd "C-x C-c"))

;; Don't send mail from emacs, that's dangerous
(global-unset-key (kbd "C-x m"))

;; Set smex
(global-set-key (kbd "M-x") 'smex)

;; enable ag via minibuffer
(autoload 'ag/read-from-minibuffer "ag")

;; y/n over yes/no
(defalias 'yes-or-no-p 'y-or-n-p)

(require 'org-tempo)

;; Set directory for backup files
(setq backup-directory-alist `(("." . "~/.emacs.backups")))

;; Insert current date
;; (defun current-date ()
;;   (interactive)
;;   (insert (shell-command-to-string "echo -n $(date +%Y-%m-%d)")))
;; ;; (global-set-key (kbd "C-c d") 'current-date)

;; ;; Insert current time
;; (defun current-time ()
;;   (interactive)
;;   (insert (shell-command-to-string "echo -n $(date +%T)")))
;; ;;(global-set-key (kbd "C-c t") 'current-time)

;; TODO make this generic for all languages where a debugger is useful.
;; Insert python debugger
;; (defun set-trace ()
;;    (interactive)
;;    (insert "import ipdb; ipdb.set_trace()\n1+1"))

;; ;; TODO comment-header does not work for clojure,
;; ;; only puts inline comment for elisp (1 ';' instead of 2)
;; ;; Insert a header style comment
;; (defun comment-header (heading)
;;   (interactive "sComment Heading: ")
;;   (setq my-length 50)
;;   (insert comment-start " ")
;;   (dotimes (number my-length) (insert "="))
;;   (insert (format "\n%s %s\n" comment-start heading))
;;   (insert comment-start " ")
;;   (dotimes (number my-length) (insert "=")))


;; ====================== Configuring Major Modes ======================

;; _Typescript_
;; followed https://willschenk.com/articles/2021/setting_up_emacs_for_typescript_development/

;; ts configuration leverages tide, company, and flycheck
(defun setup-tide-mode ()
  (interactive)
  (tide-setup)
  (flycheck-mode +1)
  (setq flycheck-check-syntax-automatically '(save mode-enabled))
  (eldoc-mode +1)
  (tide-hl-identifier-mode +1)
  (setq web-mode-markup-indent-offset 2)
  (setq web-mode-code-indent-offset 2)
  (setq web-mode-attr-indent-offset 2)
  (setq web-mode-attr-value-indent-offset 2)
  ;; company is an optional dependency. You have to
  ;; install it separately via package-install
  ;; `M-x package-install [ret] company`
  (company-mode +1))

;; aligns annotation to the right hand side
(setq company-tooltip-align-annotations t)

;; TODO spacing, etc. needs to be configured to match prettier first
;; formats the buffer before saving
(add-hook 'before-save-hook 'tide-format-before-save)

;; start the tide server whenever opening a ts file (whenever executing ts major mode)
(add-hook 'typescript-mode-hook #'setup-tide-mode)

;; identify ts and tsx files via web-mode
(add-to-list 'auto-mode-alist '("\\.tsx\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.ts\\'" . web-mode))
(add-hook 'web-mode-hook
	  (lambda ()
	    (when (string-match "ts" (file-name-extension buffer-file-name))
	      (setup-tide-mode))))

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(global-hl-line-mode t)
 '(global-whitespace-mode t)
 '(inhibit-startup-screen t)
 '(js-indent-level 2)
 '(org-todo-keywords
   '((sequence "TODO" "IN_PROGRESS" "CONTINUED" "|" "DONE" "MEETING")))
 '(package-selected-packages
   '(terraform-mode hcl-mode terraform-doc web-mode flycheck company tide markdown-mode tramp banner-comment projectile fireplace orgit dockerfile-mode cider clojure-mode org yaml-mode smex makdown-mode magit fixme-mode ag))
 '(search-default-mode 'char-fold-to-regexp)
 '(sentence-end-double-space nil)
 '(sh-basic-offset 2)
 '(terraform-indent-level 2)
 '(terraform-format-on-save t)
 '(whitespace-style
   '(face trailing newline empty space-after-tab space-before-tab))
 '(winner-mode t))

;; _GO_
(setenv "GOPATH" "/usr/local/go/bin")
(add-hook 'go-mode-hook 'lsp-deferred)
(add-to-list 'load-path "/usr/local/go/src/github.com/dougm/goflymake")
(setq mode-require-final-newline nil)

;; (require 'go-flymake)
;; (add-to-list 'load-path "/usr/local/go/src/github.com/dougm/goflymake")
;; (require 'go-flycheck)


;; =============================== Custom ==============================

(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(match ((t (:inherit secondary-selection))))
 '(secondary-selection ((t (:extend t :background "yellow1" :foreground "white")))))

;; enable typescript - tslint checker
;; (flycheck-add-mode 'typescript-tslint 'web-mode)
