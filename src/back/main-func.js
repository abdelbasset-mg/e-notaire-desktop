const fs = require('fs');
const path = require('path');


// Function to save term in json file
function saveTerm(templateName, termTitle, termText) {
    // Check if template name is provided
    if (!templateName) {
        throw new Error("Template name is required.");
    }

    // Check if term title is provided
    if (!termTitle) {
        throw new Error("Term title is required.");
    }

    // Check if term text is provided
    if (!termText) {
        throw new Error("Term text is required.");
    }

    // Check if template name is a valid file name
    if (!isValidFileName(templateName)) {
        throw new Error("Invalid template name. It should not contain special characters.");
    }

    // Construct file path
    const filePath = path.join(_dirname, 'templates', ${templateName}.json);

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
    console.log(`Term saved successfully in` ${templateName}.json);
}

// Function to validate file name
function isValidFileName(fileName) {
    // Basic validation for file name
    const pattern = /^[a-zA-Z0-9-]+$/;
    return pattern.test(fileName);
}

// Function to load act template from json file
function loadActTemplate(templateName) {
    return JSON.parse(fs.readFileSync(templates/${templateName}.json, 'utf8'));
  }



// Function to release file means fill the variables with info we provide
function releaseFile(clientInfo, actTemplate) {
    if (!actTemplate) {
      console.error('Invalid act template data');
      return [];
    }
const filledTerms = actTemplate.map(term => {
      let text = term.text;
      Object.keys(clientInfo).forEach(key => {
        text = text.replace([${key}], clientInfo[key]);
      });
      return { title: term.title, text: text };
    });
    return filledTerms;
  }