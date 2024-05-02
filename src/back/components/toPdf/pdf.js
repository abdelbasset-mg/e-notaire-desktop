const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");

// Read filled terms from ready.json file
const filledTermsFilePath = path.join(__dirname, '../template/templateData', 'ready.json');
const filledTerms = JSON.parse(fs.readFileSync(filledTermsFilePath, 'utf8'));


const documentData = {
    notaireName: "Your Notaire Name",
    notaireAddress: "Notaire's Address",
    date: new Date().toLocaleDateString(), // Current date
    templateName: "Your Template Name",
    terms: filledTerms,
    sellerName: "Seller's Name",
    buyerName: "Buyer's Name"
};

const document = {
    html: html,
    data: documentData,
    path: "./output.pdf",
    type: ""
};

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

pdf.create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });
