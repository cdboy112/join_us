![join_us](https://github.com/user-attachments/assets/1b6a4dba-32a3-4d66-9ff1-294197d3281b)
<br>
MailCollector is a lightweight, easy-to-integrate service that captures and validates user email subscriptions from any website. It offers:
<br>

💡 Real‑time email validation (format and domain checks)
<br>

⚙️ Seamless integration via embeddable HTML or JS widget
<br>

🗃️ Secure storage of email leads in a local database
<br>

↪️ Optional webhook forwarding to Mailchimp, SendGrid, or your CRM
<br>

📥 Built‑in export of collected addresses for CSV backup or analysis
<br>

Ideal for bloggers, startups, or small businesses who need a fuss‑free way to gather and manage newsletter sign‑ups—no heavy configuration or vendor lock‑in. Inspired by best practices that emphasize clarity, structure, and inviting documentation <br>

<br>
⚙️ Technologies
List the key tools you used:
<br>
Node.js – JavaScript runtime
<br>
Express – Minimalist web framework
<br>
EJS – Simple templating engine
<br>
MySQL (mysql2) – Relational database
<br>
express-validator – Form validation
<br>
CSS & background image – For styling
<br>
<br>
🚀 Getting Started
**Prerequisites
Ensure these are installed:
<br>
Node.js (v14+ recommended)
<br>
MySQL server running
<br>
A MySQL user with permission to create/read/write the my_sql database**
<br>
<br>
<br>
**Installation**
(in terminal)<br>
git clone https://github.com/cdboy112/join_us.git<br>
cd join_us<br>
npm install<br>

<br>
-- In MySQL shell
CREATE DATABASE<br> IF NOT EXISTS my_sql<br>
USE my_sql

CREATE TABLE IF NOT EXISTS users (<br>
  id INT PRIMARY KEY AUTO_INCREMENT<br>
  email VARCHAR(255) NOT NULL UNIQUE
);
<br>
<br>
<br>
<br>
<br>
Start the server:<br>
npm start<br>
node app.js**<br>
<br>
<br>
<br>
🔭 Contribution
Want to improve the project? Here's how 🎯:

Fork this repo

Create your feature branch: git checkout -b feature/my-feature

Commit your changes: git commit -m "Add feature"

Push to your fork: git push origin feature/my-feature

Open a Pull Request






