const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

app.use(bodyParser.json());

// Обработчик для сохранения ответа в базу данных
app.post('/save-answer', async (req, res) => {
    try {
        const { userName, answer } = req.body;

        const client = await pool.connect();
        const result = await client.query('INSERT INTO answers (user_name, answer) VALUES ($1, $2) RETURNING *', [userName, answer]);
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
