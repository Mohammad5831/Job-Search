const express = require('express');
const sequelize = require('./config/database');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

app.use(express.json());
app.use('/api', jobRoutes);
app.use(express.urlencoded())

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.log('Error connecting to the database', error);
});
