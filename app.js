const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nimondo:Dibalba2020@cluster0.c1m91.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();



module.exports = app;