// searchRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

// Search and filter gifts route: /api/search
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        
        // Extract query parameters (e.g., category, condition, age_years)
        const { category, condition, age_years } = req.query;
        let query = {};

        // Filter by category if provided
        if (category) {
            query.category = category;
        }

        // Filter by condition if provided
        if (condition) {
            query.condition = condition;
        }

        // Filter by age_years if provided
        if (age_years) {
            query.age_years = { $lte: Number(age_years) };
        }

        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (error) {
        console.error("Error searching gifts:", error);
        res.status(500).json({ error: "Failed to search gifts" });
    }
});

module.exports = router;
