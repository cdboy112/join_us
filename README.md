![join_us](https://github.com/user-attachments/assets/1b6a4dba-32a3-4d66-9ff1-294197d3281b)

⚙️ Technologies
List the key tools you used:

Node.js – JavaScript runtime

Express – Minimalist web framework

EJS – Simple templating engine

MySQL (mysql2) – Relational database

express-validator – Form validation

CSS & background image – For styling


🚀 Getting Started
**Prerequisites
Ensure these are installed:

Node.js (v14+ recommended)

MySQL server running

A MySQL user with permission to create/read/write the my_sql database**


**Installation**
(in terminal)
git clone https://github.com/cdboy112/join_us.git
cd join_us
npm install


-- In MySQL shell
CREATE DATABASE IF NOT EXISTS my_sql
USE my_sql

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE
);



**📋Usage
Start the server:
npm start
# or
node app.js**




🔭 Contribution
Want to improve the project? Here's how 🎯:

Fork this repo

Create your feature branch: git checkout -b feature/my-feature

Commit your changes: git commit -m "Add feature"

Push to your fork: git push origin feature/my-feature

Open a Pull Request






