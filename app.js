// app.js
const express = require('express');
const cors = require('cors');
const giftRoutes = require('./giftRoutes');
const searchRoutes = require('./searchRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); // Required by Task 7: serves /api/search

app.get('/', (req, res) => {
    res.send('GiftLink API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
