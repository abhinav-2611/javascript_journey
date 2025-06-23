/*
 **Push Local Folder to GitHub**

### Steps:

1. **Initialize Git**:
   - Open terminal in your project folder.
   - Run the command:
     ```
     git init
     ```

2. **Add Files to Git**:
   - Add all files:
     ```
     git add .
     ```
   - Or, add specific files:
     ```
     git add filename
     ```

3. **Commit Changes**:
   - Commit the changes with a message:
     ```
     git commit -m "Initial commit"
     ```

4. **Create GitHub Repository**:
   - Go to GitHub > **New repository** > Name it > **Create repository**.

5. **Link Local Repo to GitHub**:
   - Run this command to link your local repository with GitHub:
     ```
     git remote add origin https://github.com/your-username/your-repo-name.git
     ```

6. **Push to GitHub**:
   - Push the changes to GitHub:
     ```
     git push -u origin master
     ```
   - If your default branch is `main`, use:
     ```
     git push -u origin main
     ```
7. **This gives a summary of which files were changed and how many lines were added or deleted:**


   git log --stat

---

*/

## if your local files are already added to the git and u made changes ( deltion , update) then u dont have to do 'add <file_name> just write
## commands**:



This document explains how to delete a file from your Git repository, stage the deletion, commit it, and push the changes to GitHub.

## Steps to Delete a File in Git and Push the Change to GitHub

### 1. Delete the File Locally
If you manually delete a file (e.g., `example.txt`) from your project directory, Git will detect the deletion but won't stage it for commit.

- Use the file manager or terminal to delete the file from the project directory.

### 2. Check the Status of Your Repository
After deleting the file, run the following command to check the current status of your repository:

git status


### 3. Stage the Deletion
To stage the deletion, use the following command:

git add -u


### 4.  Commit the Deletion

git commit -m "message"

### Push the Change to GitHub

git push origin main

--------------------------------------------------------------------------------------------------------------------------------------

### more important commands for git 


# 1. Check if your local branch is correctly connected to the remote repository. Run:

git remote -v

# 2. git push origin main --force

# 3. Run the following command to ensure the deletions were committed previously:

git log

# 4. To see the full history of changes:

git log -p



