const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./components/auth/authController');
const { registerPerson, updatePerson, deletePerson, getPerson } = require('./components/client/clientController');
const { createContract, getContract, updateContract, deleteContract } = require('./components/contract/contractController');
const { countClients, countContracts } = require('./components/stats/statsController');
const {saveTerm,releaseFile,loadActTemplate,deleteTerm,updateTerm} = require('./components/template/templateControler');
const {createTemplateFolder,updateTemplateFolder,deleteTemplateFolder} = require('./components/template/natureControler');


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


// Route for saving a term in a template
app.post('/save-term', saveTerm);

// GET endpoint to load template by name
app.get('/load-template/:templateName', loadActTemplate);

// Put endpoint to update a term
app.put('/update-term', updateTerm);

// Delete endpoint to delete a term
app.delete('/delete-term', deleteTerm);


// Post endpoint to release the act with the filled term values, it saves it in template/templateData/ready.json which the pdf.js call and get the data from it
app.post('/release-file', releaseFile);

// Post endpoint to creat a template nature 
app.post('/add-nature', createTemplateFolder);

app.put('/update-nature', updateTemplateFolder);

app.delete('/delete-nature', deleteTemplateFolder);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});