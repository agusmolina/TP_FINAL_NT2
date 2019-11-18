const express = require('express');
const cors    = require('cors')
const morgan  = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(cors());

app.listen(process.env.PORT || 8081)