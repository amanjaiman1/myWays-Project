const mongoose = require('mongoose');

const url = `mongodb+srv://<username>:<password>@product3d.zfqdcp0.mongodb.net/`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))