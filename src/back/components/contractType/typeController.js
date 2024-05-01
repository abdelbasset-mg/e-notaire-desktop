const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'contactTypeData.json');

// Function to read data from JSON file
function readData() {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

// Function to write data to JSON file
function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

/// Function to create a new Type
function createType(req, res) {
  const { name, namothj } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  let data;
  try {
    data = readData();
  } catch (error) {
    // If reading data fails, initialize an empty object with a data array
    data = { data: [] };
  }

  if (!data.data) {
    data.data = [];
  }

  const newType = { 
    id: Math.random().toString(36).substr(2, 9), 
    name,
    namothj: namothj || [] // Initialize namothj as an empty array if not provided
  };
  data.data.push(newType);
  writeData(data);

  res.status(201).json({ message: 'Type created successfully', type: newType });
}


module.exports = { createType };