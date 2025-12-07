
const express = require('@nestjs/platform-express');
const app = express();
const PORT = 8080;

app.use(express.json());

//frontend api request for specific property data
app.get('/property-data', (req: any,res: any) => {
    res.status(200).send({
        //property data from ATTOM API
    })
});


//api request to create cluster

//api request to get routes


app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
    );