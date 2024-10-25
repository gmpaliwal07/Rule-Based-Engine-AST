# Rule-Based-Engine-AST
# Rule Engine Application

## Overview
The Rule Engine Application is a web-based application that allows users to create, combine, and evaluate rules based on user-defined conditions. Built with React and Node.js, this application leverages an Abstract Syntax Tree (AST) to process rules efficiently.

## Features
- Create rules using a custom syntax.
- Combine multiple rules into a single AST.
- Evaluate rules against user-provided data.
- User-friendly interface built with Tailwind CSS for styling.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB 
- **State Management:** React Hooks

## Prerequisites
- Node.js (version >= 14.x)
- npm (Node Package Manager)
- MongoDB 

## Setup Instructions

### Clone the Repository
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/rule-engine-app.git
   
Install Dependencies

Install the backend dependencies:
```bash
cd backend
npm install
```
Install the frontend dependencies:
```bash
cd ../my-rule-engine-app
npm install
```
Configure Environment Variables
Create a .env file in the server directory to store your environment variables. Use the following template:
.env
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/rule-engine
```
Start the Application
Start the Backend Server: Navigate to the server directory and run:
```bash
nodemon app.js
```
Start the Frontend Application: Open a new terminal window, navigate to the my-rule-engine-app directory, and run:

```bash
npm run dev
```
Access the Application: Open your web browser and go to http://localhost:5173 to view the application.

Usage
Creating Rules: Use the "Create Rule" section to input your rule string and submit.
Combining Rules: Enter multiple rule strings separated by commas in the "Combine Rules" section.
Evaluating Rules: Provide the AST of the rule and the data to evaluate in the "Evaluate Rule" section.
