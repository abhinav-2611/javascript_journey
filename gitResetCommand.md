## Git Reset Commands Cheat Sheet

1️⃣ Soft Reset (Keep Changes, Undo Commit)

git reset --soft HEAD~1
-----------------------------------------------------------------------------------------------------
🔹 Moves the last commit to the staging area (files remain as staged).

2️⃣ Mixed Reset (Undo Commit & Unstage Changes)

git reset --mixed HEAD~1

🔹 Moves the last commit to the working directory (files are unstaged but not deleted).
-----------------------------------------------------------------------------------------------------
3️⃣ Hard Reset (Completely Remove Last Commit)

git reset --hard HEAD~1

⚠️ Warning: This permanently deletes the last commit & changes!
----------------------------------------------------------------------------------------------------
4️⃣ Reset to a Specific Commit

git reset --hard <commit-hash>

🔹 Resets the repository to a specific commit.🔹 Find commit hash using:

git log --oneline
----------------------------------------------------------------------------------------------------
5️⃣ Undo a Pushed Commit

git reset --hard HEAD~1
git push origin --force

⚠️ Force push can rewrite history, be cautious!
---------------------------------------------------------------------------------------------------
6️⃣ Revert a Commit (Safe Alternative)

git revert <commit-hash>

🔹 Creates a new commit that undoes changes instead of removing history.
---------------------------------------------------------------------------------------------------
🔥 Which One to Use?

Use --soft if you just want to redo the commit.

Use --mixed if you want to edit files before committing again.

Use --hard if you want to completely remove the commit.

Use revert if the commit is already pushed to a shared repository.

✅ Tip: Always use git log --oneline before resetting to check your commit history!

