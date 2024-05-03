// personController.js
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'clientData.json');

// Function to read data from JSON file
function readData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

// Function to write data to JSON file
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Function to register a new person
function registerPerson(req, res) {
    const { fullName, dateOfBirth, placeOfBirth, gender, bloodType, IDofIdentityCart, address, nameF, nameM, lastNameM, phoneNumber, numberContrat } = req.body;
    // Validate required fields
    if (!fullName || !dateOfBirth || !placeOfBirth || !gender || !bloodType || !IDofIdentityCart || !address || !nameF || !nameM || !lastNameM || !phoneNumber || !numberContrat) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const data = readData();
    const newPerson = { id: Math.random().toString(36).substr(2, 9), fullName, dateOfBirth, placeOfBirth, gender, bloodType, IDofIdentityCart, address, nameF, nameM, lastNameM, phoneNumber, numberContrat };
    data.client.push(newPerson);
    writeData(data);

    res.status(201).json({ message: 'Person registered successfully', person: newPerson });
}

// Function to update a person's information
function updatePerson(req, res) {
    const { id } = req.params;
    const { fullName, dateOfBirth, placeOfBirth, gender, bloodType, IDofIdentityCart, address, nameF, nameM, lastNameM, phoneNumber, numberContrat } = req.body;
    // Validate required fields
    if (!fullName || !dateOfBirth || !placeOfBirth || !gender || !bloodType || !IDofIdentityCart || !address || !nameF || !nameM || !lastNameM || !phoneNumber || !numberContrat) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const data = readData();
    const index = data.client.findIndex(person => person.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Person not found' });
    }

    data.client[index] = { id, fullName, dateOfBirth, placeOfBirth, gender, bloodType, IDofIdentityCart, address, nameF, nameM, lastNameM, phoneNumber, numberContrat };
    writeData(data);

    res.status(200).json({ message: 'Person updated successfully', person: data.client[index] });
}

// Function to delete a person
function deletePerson(req, res) {
    const { id } = req.params;

    const data = readData();
    const index = data.client.findIndex(person => person.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Person not found' });
    }

    data.client.splice(index, 1);
    writeData(data);

    res.status(200).json({ message: 'Person deleted successfully' });
}

// Function to get information of a person
function getPerson(req, res) {
  const { id } = req.params;

  const data = readData();
  const person = data.client.find(person => person.id === id);
  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }

  res.status(200).json({ person });
}

module.exports = { registerPerson, updatePerson, deletePerson, getPerson };