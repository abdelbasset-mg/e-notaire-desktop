const fs = require('fs');
const path = require('path');



// save term "title and text" in a json file named with the templateName in a folder named with the templateNature
function saveTerm(req, res) {
  const { templateName, termTitle, termText, templateNature } = req.body;

  // Check if template name, term title, term text, and template nature are provided
  if (!templateName || !termTitle || !termText || !templateNature) {
      return res.status(400).json({ error: "Template name, term title, term text, and template nature are required." });
  }

  // Check if template name is a valid file name
  if (!isValidFileName(templateName)) {
      return res.status(400).json({ error: "Invalid template name. It should not contain special characters." });
  }

  // Construct folder path based on template nature
  const folderPath = path.join(__dirname, 'templateData', templateNature);

  // Ensure the folder exists; create it if it doesn't
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true }); // Create nested directories recursively
  }

  // Construct file path within the specific nature folder
  const filePath = path.join(folderPath, `${templateName}.json`);

  // Read existing data or initialize an empty array
  let terms = [];
  if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      terms = JSON.parse(fileData);
  }

  // Add new term
  terms.push({ title: termTitle, text: termText });

  // Write to JSON file
  fs.writeFileSync(filePath, JSON.stringify(terms, null, 2), 'utf8');

  console.log(`Term saved successfully in ${templateNature}/${templateName}.json`);

  // Respond with success message
  res.status(200).json({ message: `Term saved successfully in ${templateNature}/${templateName}.json` });
}

// Function to update a term in a JSON file
function updateTerm(req, res) {
  const { templateName, termTitle, newTermTitle, newTermText, templateNature } = req.body;

  // Check if all required fields are provided
  if (!templateName || !termTitle || !newTermTitle || !newTermText || !templateNature) {
    return res.status(400).json({ error: "Template name, term title, new term title, new term text, and template nature are required." });
  }

  // Construct file path within the specific nature folder
  const filePath = path.join(__dirname, 'templateData', templateNature, `${templateName}.json`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `Template file '${templateName}.json' not found in '${templateNature}' folder.` });
  }

  try {
    // Read existing data from the file
    const fileData = fs.readFileSync(filePath, 'utf8');
    const terms = JSON.parse(fileData);

    // Find the index of the term with the matching title
    const termIndex = terms.findIndex(term => term.title === termTitle);

    if (termIndex === -1) {
      return res.status(404).json({ error: `Term '${termTitle}' not found in '${templateName}.json'` });
    }

    // Update the term with the new title and text
    terms[termIndex].title = newTermTitle;
    terms[termIndex].text = newTermText;

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(terms, null, 2), 'utf8');

    console.log(`Term '${termTitle}' updated successfully in ${templateNature}/${templateName}.json`);

    // Respond with success message
    res.status(200).json({ message: `Term '${termTitle}' updated successfully in ${templateNature}/${templateName}.json` });
  } catch (error) {
    console.error('Error updating term:', error);
    res.status(500).json({ error: 'Failed to update term.' });
  }
}

// Function to delete a term from a JSON file
function deleteTerm(req, res) {
  const { templateName, termTitle, templateNature } = req.body;

  // Check if all required fields are provided
  if (!templateName || !termTitle || !templateNature) {
    return res.status(400).json({ error: "Template name, term title, and template nature are required." });
  }

  // Construct file path within the specific nature folder
  const filePath = path.join(__dirname, 'templateData', templateNature, `${templateName}.json`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `Template file '${templateName}.json' not found in '${templateNature}' folder.` });
  }

  try {
    // Read existing data from the file
    const fileData = fs.readFileSync(filePath, 'utf8');
    const terms = JSON.parse(fileData);

    // Find the index of the term with the matching title
    const termIndex = terms.findIndex(term => term.title === termTitle);

    if (termIndex === -1) {
      return res.status(404).json({ error: `Term '${termTitle}' not found in '${templateName}.json'` });
    }

    // Remove the term from the array
    terms.splice(termIndex, 1);

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(terms, null, 2), 'utf8');

    console.log(`Term '${termTitle}' deleted successfully from ${templateNature}/${templateName}.json`);

    // Respond with success message
    res.status(200).json({ message: `Term '${termTitle}' deleted successfully from ${templateNature}/${templateName}.json` });
  } catch (error) {
    console.error('Error deleting term:', error);
    res.status(500).json({ error: 'Failed to delete term.' });
  }
}

// Function to validate file name
function isValidFileName(fileName) {
    // Basic validation for file name
    const pattern = /^[a-zA-Z0-9-_]+$/;
    return pattern.test(fileName);
}


// Function to load activity template
function loadActTemplate(req, res) {
  const { templateName } = req.params;
  

  // Check if template name is provided
  if (!templateName) {
      return res.status(400).json({ error: "Template name is required." });
  }

  try {
    
      // Construct file path
      const filePath = path.join(__dirname, 'templateData', `${templateName}.json`);

      // Read and parse JSON data from file
      const templateData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Respond with loaded template data
      res.status(200).json(templateData);
  } catch (error) {
      // Handle file read or JSON parse errors
      console.error("Error loading template:", error);
      res.status(500).json({ error: "Failed to load template." });
  }
}


function releaseFile(req, res) {
  const { clientInfo, templateName,templateNature } = req.body;

  // Check if clientInfo and templateName are provided
  if (!clientInfo || !templateName || !templateNature) {
      console.error('Invalid clientInfo or templateName data');
      return res.status(400).json({ error: 'Invalid clientInfo or templateName data' });
  }

  try {
      // Construct file path for the actTemplate
      const filePath = path.join(__dirname, `./templateData/${templateNature}`, `${templateName}.json`);

      // Check if the actTemplate file exists
      if (!fs.existsSync(filePath)) {
          console.error('Template file not found');
          return res.status(404).json({ error: 'Template file not found' });
      }

      // Read the actTemplate file
      const actTemplate = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Fill the variables in the actTemplate with clientInfo
      const filledTerms = actTemplate.map(term => {
          let text = term.text;
          Object.keys(clientInfo).forEach(key => {
              text = text.replace(`[${key}]`, clientInfo[key]);
          });
          return { title: term.title, text: text };
      });

        // Write filled terms to ready.json file
        const outputFilePath = path.join(__dirname, 'templateData', 'ready.json');
        fs.writeFileSync(outputFilePath, JSON.stringify(filledTerms, null, 2));

      // Send the filledTerms as response
      res.status(200).json(filledTerms);
  } catch (error) {
      console.error('Error releasing file:', error);
      res.status(500).json({ error: 'Failed to release file' });
  }
}

// Function to count the number of JSON files in all folders within templateData and subtract 1
function countJsonFiles(req, res) {
  const templateDataPath = path.join(__dirname, 'templateData');

  try {
    // Initialize count
    let fileCount = 0;

    // Recursively traverse through the templateData directory
    function traverse(dir) {
      const files = fs.readdirSync(dir);

      // Loop through each file/directory in the current directory
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // If it's a directory, recursively traverse into it
          traverse(filePath);
        } else if (path.extname(file) === '.json') {
          // If it's a JSON file, increment the count
          fileCount++;
        }
      }
    }

    // Start traversing from the templateData directory
    traverse(templateDataPath);

    // Subtract 1 from the count of JSON files (if there are any)
    if (fileCount > 0) {
      fileCount--;
    }

    // Respond with the adjusted count of JSON files
    res.status(200).json({ adjustedJsonFileCount: fileCount });
  } catch (error) {
    console.error('Error counting JSON files:', error);
    res.status(500).json({ error: 'Failed to count JSON files' });
  }
}


  module.exports ={saveTerm,releaseFile,loadActTemplate,deleteTerm,updateTerm,countJsonFiles};




