Customer Registration System
A simple full stack project using HTML, CSS, Vanilla JavaScript, Node.js, Express, and MySQL, created with the goal of practicing integration between the front-end, back-end, and relational databases.

Features
- Form with required field validation

- Form data is submitted using the Fetch API via a POST request

- Data is stored persistently in a MySQL database

- Modular code structure with a separate database connection file (db.js)

- Architecture ready for expansion (e.g., login system, password encryption, data dashboard)

Technologies Used
Front-end: HTML5, CSS3, JavaScript (vanilla)
Back-end: Node.js, Express
Database: MySQL using the mysql2 package
Other: CORS, Body-parser middleware

How to Run the Project Locally
1. Clone the repository

git clone https://github.com/your-username/your-repository.git
cd your-repository

2. Install dependencies

npm install express cors body-parser mysql2

3. Set up the MySQL database
Access your MySQL instance and run the following SQL:

CREATE DATABASE IF NOT EXISTS cadastro_clientes;

USE cadastro_clientes;

CREATE TABLE IF NOT EXISTS cliente (
  idcliente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  genero ENUM('masculino', 'feminino','outro') NOT NULL,
  data_nascimento DATE NOT NULL,
  telefone VARCHAR(20),
  celular VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  cep VARCHAR(10) NOT NULL,
  endereco VARCHAR(150) NOT NULL,
  numero VARCHAR(10) NOT NULL,
  complemento VARCHAR(100),
  cidade VARCHAR(50) NOT NULL,
  estado CHAR(2) NOT NULL,
  senha_hash VARCHAR(255) NOT NULL
);
Note: Passwords are stored as plain text for simplicity. You can use bcrypt to hash passwords securely.

How to Test the Form

1- Start the server:
node server.js

2- Open index.html in your browser

3- Fill out the form and click "Register". If everything works correctly, you will see a success message and the data will be saved in your MySQL database.

Screenshot


![image](https://github.com/user-attachments/assets/d8d0f6e7-048d-402c-b62d-99eb4e542848)

Possible Improvements 
- Hash password using bcrypt before saving

- Create login and authentication system using JWT

- List and edit registered clients

- Add more advanced validation and error handling on both front-end and back-end

Contact
Feel free to reach out if you have questions, suggestions, or want to contribute:

- GitHub Profile: DNeves8
- Linkedin: https://www.linkedin.com/in/davi-neves-ba7423254/
- daviaguiiar.neves@gmail.com
