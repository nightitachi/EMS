const express = require('express');
const router = express.Router();
const empModel = require('../models/employee');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

// Registration API
router.post('/register', async (req, res) => {
  try {
    const { name, level, password } = req.body;
    const employee = await empModel.findOne({ name });

    if (employee) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployee = new empModel({ name, level, password: hashedPassword });
    await newEmployee.save();

    return res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login API
router.post('/login', async (req, res) => {
  try {
    const { name, level, password } = req.body;

    const employee = await empModel.findOne({ name });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found!' });
    }

    const validPassword = await bcrypt.compare(password, employee.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password!' });
    }

    const token = jwt.sign({ id: employee._id }, "21992100");
    res.cookie("token", token);

    return res.status(200).json({ message: 'Employee successfully logged in', id: employee._id });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
