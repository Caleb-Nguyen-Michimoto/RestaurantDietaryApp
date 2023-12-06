const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'capstone',
    password: 'hacc2023',
    port: 5432,
});

app.use(express.json(), express.static(path.join(__dirname, 'public')));

// Example route to get comments for a specific account
app.get('/comments/:accountId', async (req, res) => {
    const { accountId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM comments WHERE account_id = $1', [accountId]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Example route to add a comment for a specific account
app.post('/comments', async (req, res) => {
    const { accountId, comment } = req.body;
    try {
        await pool.query('INSERT INTO comments (account_id, comment) VALUES ($1, $2)', [accountId, comment]);
        res.status(201).send('Comment added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Example route to get comments for a specific account
app.get('/restuarant', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT restuarant.id, name, location, typeoffood, website, rating, vegan, vegetarian, glutenfree
            FROM restuarant
            JOIN menuChoice
            ON restuarant.menuChoiceId=menuChoice.id;`
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



