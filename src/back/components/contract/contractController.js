// contractController.js
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "contractData.json");

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
  const {
    sellerName,
    buyerName,
    idSeller,
    idBuyer,
    dateBirthSeller,
    dateBirthBuyer,
    numberOfRooms,
  } = req.body;
  // Validate required fields
  if (
    !sellerName ||
    !buyerName ||
    !idSeller ||
    !idBuyer ||
    !dateBirthSeller ||
    !dateBirthBuyer ||
    !numberOfRooms
  ) {
    return res.status(400).json({ message: "All fields are required" });
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
  const formattedDate = currentDate.toISOString(); // Convert to ISO string format

  const newContract = {
    id: Math.random().toString(36).substr(2, 9),
    sellerName,
    buyerName,
    idSeller,
    idBuyer,
    dateBirthSeller,
    dateBirthBuyer,
    numberOfRooms,
    formattedDate,
  };
  data.contract.push(newContract);
  writeData(data);

  res
    .status(200)
    .json({ message: "Contract created successfully", contract: newContract });
}

// Function to get information of a contract
function getContract(req, res) {
  const { id } = req.params;

  const data = readData();
  const contract = data.contract.find((contract) => contract.id === id);
  if (!contract) {
    return res.status(404).json({ message: "Contract not found" });
  }

  res.status(200).json({ status: 200, contract });
}

// Function to update a contract
function updateContract(req, res) {
  const { id } = req.params;
  const {
    sellerName,
    buyerName,
    idSeller,
    idBuyer,
    dateBirthSeller,
    dateBirthBuyer,
    numberOfRooms,
  } = req.body;
  // Validate required fields
  if (
    !sellerName ||
    !buyerName ||
    !idSeller ||
    !idBuyer ||
    !dateBirthSeller ||
    !dateBirthBuyer ||
    !numberOfRooms
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();
  const index = data.contract.findIndex((contract) => contract.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Contract not found" });
  }

  data.contract[index] = {
    id,
    sellerName,
    buyerName,
    idSeller,
    idBuyer,
    dateBirthSeller,
    dateBirthBuyer,
    numberOfRooms,
  };
  writeData(data);

  res.status(200).json({
    message: "Contract updated successfully",
    contract: data.contract[index],
  });
}

// Function to delete a contract
function deleteContract(req, res) {
  const { id } = req.params;

  const data = readData();
  const index = data.contract.findIndex((contract) => contract.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Contract not found" });
  }

  data.contract.splice(index, 1);
  writeData(data);

  res.status(200).json({ message: "Contract deleted successfully" });
}

module.exports = {
  createContract,
  getContract,
  updateContract,
  deleteContract,
};
