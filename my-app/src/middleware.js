const express = require('express');
const cors = require('cors');
const app = express();

// Enable All CORS Requests
//this allows cross domain requests so localhost is not blocked
app.use(cors());

// Simulate fetch some data with async operation
//this uses a 5000 millisecond, or 5 second delay to demonstrate
const mainAsync = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: 'Data fetched successfully asynchronously and from react context' });
        }, 5000);
    });
};

app.get('/call-main-async', async (req, res) => {
    try {
        const result = await mainAsync();
        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));