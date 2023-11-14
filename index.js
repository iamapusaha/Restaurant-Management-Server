const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Restaurant Management Server is running now!')
})
app.listen(port, () => {
    console.log(`Restaurant Management Server listening on port ${port}`);
})