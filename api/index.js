const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors());

let tweets = [];

const shouldItFail = () => {
    if(Math.random() < 0.25) {
        return true;
    }

    return false;
}

app.get('/tweets', (req, res) => { 
    // if(shouldItFail()) {
       // res.sendStatus(500);
    //} else {
        res.send(tweets) 
    //}
})
app.post('/tweet', (req, res) => {
    if(shouldItFail()) {
        res.sendStatus(500);
    } else {
        tweets.push(req.body);
        res.sendStatus(200);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));