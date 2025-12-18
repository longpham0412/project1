const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Chuc mung! Backend Node.js da chay thanh cong!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});