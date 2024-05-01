const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const secretKey = '4444'; // Change this with a random secret key
const dataFilePath = path.join(__dirname, 'authData.json');


// Function to read data from JSON file
function readData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

// Function to write data to JSON file
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Register a new user
function registerUser(username, password) {
    const data = readData();
    const hashedPassword = bcrypt.hashSync(password, 8);
    data.users.push({ username, password: hashedPassword });
    writeData(data);
}

// Login user
function loginUser(username, password) {
    const data = readData();
    const user = data.users.find(user => user.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return null;
    }
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return token;
}

module.exports = { registerUser, loginUser };