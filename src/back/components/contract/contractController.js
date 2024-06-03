// contractController.js
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'contractData.json');

// Function to read data from JSON file
function readData() {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

// Function to write data to JSON file
function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Function to create a new contract
function createContract(req, res) {
  const { clientName, idClient, clientBirth, clientPlace, address, nameFather, nameMother,lastNameMother,phone,cote,sexe,contractNature,model } = req.body;
  // Validate required fields
  if (!clientName || !idClient || !clientBirth || !clientPlace || !address || !nameFather || !nameMother || !lastNameMother || !phone || !cote || !sexe ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let data;
  try {
    data = readData();
  } catch (error) {
    // If reading data fails, initialize an empty object with contracts array
    data = { contract: [] };
  }

  // Ensure that data.contract is initialized
  if (!data.contract) {
    data.contract = [];
  }
  const currentDate = new Date(); // Get current date and time
const formattedDate = currentDate.toISOString().split('T')[0]; // Convert to ISO string format and keep only the date part

  const newContract = { id: Math.random().toString(36).substr(2, 9), clientName, idClient, clientBirth, clientPlace, address, nameFather, nameMother,lastNameMother,phone,cote,sexe,contractNature,model,formattedDate};
  data.contract.push(newContract);
  writeData(data);

  res.status(201).json({ message: 'Contract created successfully', contract: newContract });
}

function getTopThreeContractFrequencies(contractFrequencies) {
  const sortedFrequencies = Object.entries(contractFrequencies).sort((a, b) => b[1] - a[1]);
  return sortedFrequencies.slice(0, 3).map(([contractNature, frequency]) => ({ contractNature, frequency }));
}


// Function to get information of a contract
function updateContractFrequencies(data) {
  const frequencies = {};
  data.contract.forEach(contract => {
    if (frequencies[contract.contractNature]) {
      frequencies[contract.contractNature]++;
    } else {
      frequencies[contract.contractNature] = 1;
    }
  });
  data.contractFrequencies = frequencies;
}

function getContract(req, res) {
  const { id } = req.params;

  let data;
  try {
    data = readData();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  const contract = data.contract;
  if (!contract) {
    return res.status(404).json({ message: 'Contract not found' });
  }

  // Update contract frequencies
  updateContractFrequencies(data);
 


  writeData(data);

  res.status(200).json({ contract, contractFrequencies: data.contractFrequencies});
}


// Function to update a contract
function updateContract(req, res) {
  const { id } = req.params;
  const { sellerName, buyerName, idSeller, idBuyer, dateBirthSeller, dateBirthBuyer, numberOfRooms } = req.body;
  // Validate required fields
  if (!sellerName || !buyerName  || !idSeller || !idBuyer || !dateBirthSeller || !dateBirthBuyer || !numberOfRooms) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const data = readData();
  const index = data.contract.findIndex(contract => contract.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Contract not found' });
  }

  data.contract[index] = { id, sellerName, buyerName, idSeller, idBuyer, dateBirthSeller, dateBirthBuyer, numberOfRooms };
  writeData(data);

  res.status(200).json({ message: 'Contract updated successfully', contract: data.contract[index] });
}

// Function to delete a contract
function deleteContract(req, res) {
  const { id } = req.params;

  const data = readData();
  const index = data.contract.findIndex(contract => contract.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Contract not found' });
  }

  data.contract.splice(index, 1);
  writeData(data);

  res.status(200).json({ message: 'Contract deleted successfully' });
}

// Function to count the number of contracts
function countContracts(req, res) {
  try {
    const data = readData();
    const contractCount = data.contract ? data.contract.length : 0;
    const topThreeFrequencies = getTopThreeContractFrequencies(data.contractFrequencies);
    res.status(200).json({ contractCount,topThreeFrequencies  });
  } catch (error) {
    res.status(500).json({ message: 'Failed to count contracts' });
  }
}

// Function to count the number of contracts and return twice the count
function countClients(req, res) {
  try {
    const data = readData();
    const contractCount = data.contract ? data.contract.length : 0;
    const doubleContractCount = contractCount * 2; // Calculate twice the contract count

    res.status(200).json({ doubleContractCount }); // Return twice the contract count
  } catch (error) {
    res.status(500).json({ message: 'Failed to count contracts' });
  }
}


const countContractsByDay = (contractData) => {
  try {
    const contracts = contractData.contract;
    const dayCounts = {};

    contracts.forEach(contract => {
      const date = contract.dateContract || contract.formattedDate;
      if (date) {
        const day = new Date(date).toISOString().split('T')[0];
        if (dayCounts[day]) {
          dayCounts[day]++;
        } else {
          dayCounts[day] = 1;
        }
      }
    });

    return dayCounts;
  } catch (error) {
    console.error('Error counting contracts by day:', error);
    throw new Error('Failed to count contracts by day');
  }
};

const calculateContractsByDay = (req, res) => {
  try {
    const contractData = require('./contractData.json'); // Load your JSON data here

    const dayCounts = countContractsByDay(contractData);

    res.status(200).json(dayCounts);
  } catch (error) {
    console.error('Error retrieving contract data:', error);
    res.status(500).json({ error: 'Failed to retrieve contract data' });
  }
};


module.exports = { createContract, getContract, updateContract, deleteContract,countContracts,countClients,calculateContractsByDay };