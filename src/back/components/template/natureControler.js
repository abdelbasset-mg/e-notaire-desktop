const fs = require('fs');
const path = require('path');

// Function to create a folder for a given template nature
function createTemplateFolder(req, res) {
    const { templateNature } = req.body;
  
    // Check if template nature is provided
    if (!templateNature) {
      return res.status(400).json({ error: "Template nature is required." });
    }
  
    // Construct folder path based on template nature
    const folderPath = path.join(__dirname, 'templateData', templateNature);
  
    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
      return res.status(400).json({ error: `Folder for template nature '${templateNature}' already exists.` });
    }
  
    try {
      // Create the folder recursively
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`Folder created for template nature: ${templateNature}`);
  
      // Respond with success message
      res.status(200).json({ message: `Folder created for template nature: ${templateNature}` });
    } catch (error) {
      console.error('Error creating folder:', error);
      res.status(500).json({ error: 'Failed to create folder for template nature' });
    }
  }
  
  function updateTemplateFolder(req, res) {
    const { oldTemplateNature, newTemplateNature } = req.body;
  
    // Check if both old and new template natures are provided
    if (!oldTemplateNature || !newTemplateNature) {
      return res.status(400).json({ error: "Both old and new template natures are required." });
    }
  
    const oldFolderPath = path.join(__dirname, 'templateData', oldTemplateNature);
    const newFolderPath = path.join(__dirname, 'templateData', newTemplateNature);
  
    // Check if the old folder exists
    if (!fs.existsSync(oldFolderPath)) {
      return res.status(404).json({ error: `Folder for template nature '${oldTemplateNature}' not found.` });
    }
  
    // Check if the new folder already exists
    if (fs.existsSync(newFolderPath)) {
      return res.status(400).json({ error: `Folder for template nature '${newTemplateNature}' already exists.` });
    }
  
    try {
      // Rename the folder
      fs.renameSync(oldFolderPath, newFolderPath);
      console.log(`Folder renamed from '${oldTemplateNature}' to '${newTemplateNature}'.`);
  
      // Respond with success message
      res.status(200).json({ message: `Folder renamed to '${newTemplateNature}'.` });
    } catch (error) {
      console.error('Error renaming folder:', error);
      res.status(500).json({ error: 'Failed to rename folder.' });
    }
  }
  
  function deleteTemplateFolder(req, res) {
    const { templateNature } = req.body;
  
    // Check if template nature is provided
    if (!templateNature) {
      return res.status(400).json({ error: "Template nature is required." });
    }
  
    const folderPath = path.join(__dirname, 'templateData', templateNature);
  
    // Check if the folder exists
    if (!fs.existsSync(folderPath)) {
      return res.status(404).json({ error: `Folder for template nature '${templateNature}' not found.` });
    }
  
    try {
      // Delete the folder recursively
      fs.rmdirSync(folderPath, { recursive: true });
      console.log(`Folder deleted for template nature: ${templateNature}`);
  
      // Respond with success message
      res.status(200).json({ message: `Folder deleted for template nature: ${templateNature}` });
    } catch (error) {
      console.error('Error deleting folder:', error);
      res.status(500).json({ error: 'Failed to delete folder.' });
    }
  }

  module.exports ={createTemplateFolder,updateTemplateFolder,deleteTemplateFolder};