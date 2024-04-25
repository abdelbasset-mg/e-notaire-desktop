const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./components/auth/authController');
const { createType } = require('./components/contractType/typeController');
const { registerPerson, updatePerson, deletePerson, getPerson } = require('./components/client/clientController');
const { createContract, getContract, updateContract, deleteContract } = require('./components/contract/contractController');
const { countClients, countContracts } = require('./components/stats/statsController');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Registration route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  registerUser(username, password);
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  const token = loginUser(username, password);
  if (!token) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ token });
});


// Route for creating a new contract type
app.post('/contractTypes', createType);



// Route for registering a new person
app.post('/client', registerPerson);

// Route for updating a person's information
app.put('/client/:id', updatePerson);

// Route for deleting a person
app.delete('/client/:id', deletePerson);

// Route for getting information of a person
app.get('/client/:id', getPerson);


// Route for creating a new contract
app.post('/contracts', createContract);

// Route for getting information of a contract
app.get('/contracts/:id', getContract);

// Route for updating a contract
app.put('/contracts/:id', updateContract);

// Route for deleting a contract
app.delete('/contracts/:id', deleteContract);

// Route for counting the number of clients
app.get('/stats/clients', countClients);

// Route for counting the number of contracts
app.get('/stats/contracts', countContracts);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});