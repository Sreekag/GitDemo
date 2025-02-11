const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sreegovindaraj2003:wTDpOgSpTMHLskEG@node.jelg6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.error(err));

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    position: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

// CRUD Operations

// 1. Create (Async/Await)
app.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 2. Read (Promise)
app.get('/employees', (req, res) => {
    Employee.find().then((employees) => {
        res.status(200).json(employees);
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    });
});

// 3. Update (Callback)
app.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Delete (Async/Await)
app.delete('/employees/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//promises:

app.get('/employees/email/:email', (req, res) => {
    Employee.findOne({ email: req.params.email })
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ error: "please check the email once" });
            }
            res.status(200).json(employee);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/employees/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ error: "Employee not found" });
            }
            res.status(200).json(employee);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(3000, () => console.log('Server running on port 3000'));
