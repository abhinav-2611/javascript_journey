# Git Configuration Notes

## Step 1: Install Git
- **Windows**: Download and install Git from [git-scm.com](https://git-scm.com/).

-------------------------------------------------------------------------
## Step 2: Set Your Git Identity
- Open the terminal and run the following commands to set your name and email:

 git config --global user.name "Your Name"
 git config --global user.email "youremail@gmail.com"

-------------------------------------------------------------------------- 
## Step 3: Verify Your Configuration
- To check if your settings are correct, run:

 git config --global --list

 - This will display your name, email, and other configurations.

---------------------------------------------------------------------------
## Step 4: Set Up SSH (Optional but Recommended for GitHub)
- **Generate an SSH key pair**:

ssh-keygen -t rsa -b 4096 -C "youremail@example.com"
- **Add the public key to GitHub**:
- Copy the contents of `~/.ssh/id_rsa.pub` and paste it into your GitHub account settings under **SSH and GPG keys**.

--------------------------------------------------------------------------------------------------------------------
## Step 5: Set Your Default Text Editor (Optional)
- To use a specific text editor for Git commit messages, run:

git config --global core.editor "code --wait"

- This example sets VS Code as the default editor.
--------------------------------------------------------------------------------------------------------------------

### Now Git is ready to use! Start cloning repositories, committing changes, and pushing them to GitHub.

