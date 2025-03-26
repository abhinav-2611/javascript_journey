# How to Clone a Project from GitHub and Push Changes

## Step 1: Clone the Project from GitHub

1. **Get the GitHub Repository URL**:
   - Go to the repository page on GitHub.
   - Click the **Code** button.
   - Copy the **URL** (use HTTPS or SSH).

2. **Clone the Repository**:
   - Open **VS Code**.
   - Open the **Terminal** in VS Code 
   - Run the following command (replace `your-repository-url` with the copied URL):
     ```
     git clone your-repository-url
     ```
   - This will create a local copy of the project on your computer.

3. **Navigate to the Project Folder**:
   - Change to the project directory:
     ```
     cd your-repository-name
     ```
   - Now, you can work on your project files locally.

---

## Step 2: Make Changes to the Code

1. **Edit the Files**:
   - Open the files you want to change in **VS Code**.
   - Modify the code as needed.

---

## Step 3: Stage, Commit, and Push Your Changes

1. **Stage Your Changes**:
   - After editing, stage the changes (prepare them for commit):
     ```
     git add .
     ```
   - This stages all the changes. If you want to stage specific files, use `git add filename`.

2. **Commit Your Changes**:
   - Commit your changes with a message:
     ```
     git commit -m "Describe your changes"
     ```
   - For example, "Fixed bug in login page" or "Updated styling of homepage".

3. **Push Your Changes to GitHub**:
   - Upload your changes to the GitHub repository:
     ```
     git push origin main
     ```
   - If your branch is `master`, use `git push origin master`.

---

## Step 4: Pull Latest Changes (if needed)

If others have made changes while you were working, you need to get their updates before pushing your own.

1. **Pull the Latest Changes**:
   - Run this command to fetch and merge changes from GitHub:
     ```
     git pull origin main
     ```
   - If your branch is `master`, use `git pull origin master`.

---

