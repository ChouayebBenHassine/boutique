// Imports
const express = require('express')
const mongoose = require('mongoose')
// test git
// Lunch Express
const app = express();

// Body Parser Middlleware for API
app.use(express.json())

// 1- Add DB config 
const db = require('./config/key').mongoURI

// Connect to MongoDB 
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected...'))
    .catch(err=> console.log('MongoDB error: '+err))


// 2- Add Routes API ./routes/api
// Items route API Midleware
const clients = require('./routes/api/clients')

const articles = require('./routes/api/articles')

const factures = require('./routes/api/factures')

const stocks = require('./routes/api/stocks')

const categories = require('./routes/api/categories')

const employees = require('./routes/api/employees')

const categEmps = require('./routes/api/categemps')

const couts = require('./routes/api/couts')




app.use('/api/clients',clients)


app.use('/api/articles',articles)


app.use('/api/factures',factures)

app.use('/api/stocks',stocks)

app.use('/api/categories',categories)

app.use('/api/employees',employees)

app.use('/api/categemps',categEmps)


app.use('/api/couts',couts)
// Port for production
const port = process.env.PORT || 5000;

// Lunch server
app.listen(port, () => console.log(`Server running on port ${port}...`));

