const fs = require('fs');
const path = require('path');

const clientDataPath = path.join(__dirname, 'clientData.json');
const contractDataPath = path.join(__dirname, '../contract/contractData.json');
const statsFilePath = path.join(__dirname, 'statsData.json');

// Function to read data from a file
function readData(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Function to write data to a file
function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const getClientData = () => {
  const rawData = fs.readFileSync(clientDataPath);
  const clientData = JSON.parse(rawData);
  return clientData.client;
};

const countClients = () => {
  const clientData = getClientData();
  return clientData.length;
};

const updateStats = () => {
  const numberOfClients = countClients();
  const stats = [
    { type: "numberClients", value: numberOfClients }
  ];
  writeData(statsFilePath, { stats });
};

// API to count the number of contracts
function countContracts(req, res) {
  const contracts = readData(contractDataPath);
  const numberOfContracts = contracts.length;

  const statsData = readData(statsFilePath);
  statsData.stats = statsData.stats || [];

  const contractIndex = statsData.stats.findIndex(stat => stat.type === 'numberContracts');
  if (contractIndex !== -1) {
    statsData.stats[contractIndex].value = numberOfContracts;
  } else {
    statsData.stats.push({ type: 'numberContracts', value: numberOfContracts });
  }

  writeData(statsFilePath, statsData);

  res.status(200).json({ stats: statsData.stats });
}

module.exports = { countClients, countContracts };
