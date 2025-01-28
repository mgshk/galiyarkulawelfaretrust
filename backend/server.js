import express from 'express';
import cors from "cors";
import { connectDB } from './config/db.js';
import Donations from './models/donations.modal.js';
import dotenv from 'dotenv';
import path from "path";
import LoginForm from './models/login.modal.js';

const app = new express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.post('/api/login', async (req, res) => {
    const body = req.body;
    if (!body.username || !body.password) {
        return res.status(400).json({ status: 'failed', message: 'Please provide all the details' })
    }

    try {
        const user = await LoginForm.findOne({username: body.username, password: body.password});
        if (!user) {
            res.status(400).json({ status: 'failed', message: 'Invalid login details' })
        }
        res.status(201).json({ status: 'success', data: user })
    } catch (e) {
        res.status(400).json({ status: 'failed', message: e })
    }
});

app.post('/api/donations', async (req, res) => {
    const body = req.body;
    if (!body.name || !body.contact || !body.address) {
        return res.status(400).json({ status: 'failed', message: 'Please provide all the details' })
    }

    const newForm = new Donations(body);
    try {
        await newForm.save();
        res.status(201).json({ status: 'success', data: newForm })
    } catch (e) {
        res.status(400).json({ status: 'failed', message: 'Form details not saved' })
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    // re-direct to frontend
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port ' + PORT);
});
