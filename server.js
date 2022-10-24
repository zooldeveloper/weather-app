const port = 8000;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config({ path: '.env' });

const app = express();
app.use(cors());

app.get('/', (req, res) => {
     
     const BASE_URL = 'https://api.openweathermap.org/data/2.5';
     const url = new URL(BASE_URL + '/' + req.query[1].serviceType);
     url.search = new URLSearchParams({ ...req.query[0], appid: process.env.API_KEY });
     
     axios.get(url)
          .then(response => res.status(200).json(response.data))
          .catch(error => console.log(error))
          
});

app.listen(process.env.PORT || port, () => console.log(`Server is running on port ${process.env.PORT || port}`));