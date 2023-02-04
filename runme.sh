#!/bin/bash

# RUN THIS FILE WITH bash runme.sh TO START YOUR PROJECT

# utils
function break_line() {
  echo ""
}

break_line

# ask for information

echo "Before we get started, let's answer a few questions."
echo "You can change the answers whenever you want later :)"

break_line

read -p "Your name (John Doe): " AUTHOR
read -p "Your GitHub username (jonhdoe): " GITHUB_USERNAME
read -p "Your email (johndoe2000@mail.com): " EMAIL
read -p "Your project name (My Project): " PROJECT_NAME
read -p "Your project description (Lorem Ipsum...): " DESCRIPTION

CURRENT_YEAR=$(date +"%Y")
LOWERCASE_PROJECT_NAME=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
GITHUB_REPO_NAME=$(echo "$PROJECT_NAME" | tr -d ' ')

break_line

echo "Deleting boilerplate .git ..."

rm -rf .git

# replaces placeholders with input data

echo "Adding information to the project ..."

# cypress/e2e/spec.cy.ts
sed -i "s/<GITHUB_USERNAME>/$GITHUB_USERNAME/g" cypress/e2e/spec.cy.ts

# src/components/Greetings.tsx
sed -i "s/<AUTHOR>/$AUTHOR/g" src/components/Greetings.tsx

# src/pages/api/index.ts
sed -i "s/<AUTHOR>/$AUTHOR/g" src/pages/api/index.ts

# src/pages/_app.tsx
sed -i "s/<PROJECT_NAME>/$PROJECT_NAME/g" src/pages/_app.tsx

# src/pages/_document.tsx
sed -i "s/<AUTHOR>/$AUTHOR/g" src/pages/_document.tsx
sed -i "s/<DESCRIPTION>/$DESCRIPTION/g" src/pages/_document.tsx

# LICENSE
sed -i "s/<CURRENT_YEAR>/$CURRENT_YEAR/g" LICENSE
sed -i "s/<AUTHOR>/$AUTHOR/g" LICENSE

# package.json
sed -i "s/<LOWERCASE_PROJECT_NAME>/$LOWERCASE_PROJECT_NAME/g" package.json
sed -i "s/<DESCRIPTION>/$DESCRIPTION/g" package.json
sed -i "s/<AUTHOR>/$AUTHOR/g" package.json
sed -i "s/<EMAIL>/$EMAIL/g" package.json
sed -i "s/<GITHUB_USERNAME>/$GITHUB_USERNAME/g" package.json
sed -i "s/<GITHUB_REPO_NAME>/$GITHUB_REPO_NAME/g" package.json

# README.md
sed -i "s/<PROJECT_NAME>/$PROJECT_NAME/g" README.md
sed -i "s/<GITHUB_USERNAME>/$GITHUB_USERNAME/g" README.md
sed -i "s/<AUTHOR>/$AUTHOR/g" README.md

echo "Deleting runme.sh file ..."
echo "You are ready to start!"

sleep 3

rm -rf runme.sh
