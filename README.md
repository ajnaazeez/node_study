# Node.js Basics – Practice Tasks

This repository contains my basic Node.js practice programs.
The purpose of this project is to understand how Node.js works on the server side and how it handles files and HTTP requests.

## Topics Covered

* Node.js setup
* Core modules
* File System (fs module)
* Streams
* HTTP Server creation

---

## Programs Included

### 1. File Read & Write (FS Module)

This program demonstrates how to work with files using the Node.js **fs module**.

Functions used:

* `fs.writeFile()` – Create and write data into a file
* `fs.readFile()` – Read data from a file
* `fs.appendFile()` – Add content to an existing file

This helped me understand how Node.js interacts with the system files.

---

### 2. Streams

This program uses **streams** to read large files efficiently.

Concepts learned:

* `createReadStream()`
* `createWriteStream()`
* Piping data using `.pipe()`

Streams help handle large files without loading the entire file into memory.

---

### 3. HTTP Server Creation

This program creates a basic web server using the Node.js **http module**.

Features:

* Server runs on a local port (example: 3000)
* Responds to browser requests
* Displays text in the browser

Example:
When the server runs and we open `http://localhost:3000`, the browser shows a response from the Node.js server.

---

## What I Learned

* How Node.js works outside the browser
* Working with core modules
* Handling files using fs module
* Efficient data handling with streams
* Creating a basic backend server

This is my first step into backend development using Node.js 
