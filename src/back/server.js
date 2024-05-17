const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./components/auth/authController');
const { registerPerson, updatePerson, deletePerson, getPerson } = require('./components/client/clientController');
const { createContract, getContract, updateContract, deleteContract,countContracts, countClients, calculateContractsByDay } = require('./components/contract/contractController');
const {saveTerm,releaseFile,loadActTemplate,deleteTerm,updateTerm,countJsonFiles,createTemplate,templateList} = require('./components/template/templateControler');
const {createTemplateFolder,updateTemplateFolder,deleteTemplateFolder,readTemplateFolders} = require('./components/template/natureControler');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())


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

// New route for counting contracts
app.get('/contracts-count',countContracts);//Done

// New route for counting clients
app.get('/clients-count',countClients);//Done

// New route for counting contracts by day
app.get('/contracts-by-day', calculateContractsByDay);//Done



// route for creating an empty template
app.post('/create-template', createTemplate);

// Route for saving a term in a template
app.post('/save-term', saveTerm);//Done

// GET endpoint to load template by name
app.get('/load-template/:templateNature/:templateName', loadActTemplate);//fih mchakil

// Put endpoint to update a term
app.put('/update-term', updateTerm);//mzal

// Delete endpoint to delete a term
app.delete('/delete-term', deleteTerm);//mzal

// GET endpoint to count the number of json files in the templateData folder
app.get('/templates-count', countJsonFiles);//done



// Post endpoint to release the act with the filled term values, it saves it in template/templateData/ready.json which the pdf.js call and get the data from it
app.post('/release-file', releaseFile);

// Post endpoint to creat a template nature 
app.post('/add-nature', createTemplateFolder);//done

app.put('/update-nature', updateTemplateFolder);//done

app.delete('/delete-nature/', deleteTemplateFolder);//Done

app.get('/read-nature', readTemplateFolders);//done

app.get('/template-list', templateList);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});