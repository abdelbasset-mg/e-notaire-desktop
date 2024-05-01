const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routesUrls = require('./components/auth/routes/routes')
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.DATABASE_ACCESS)
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.error("Error connecting to database:", error);
});
app.use(bodyParser.json());
app.use(cors());
app.use('/app', routesUrls)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});