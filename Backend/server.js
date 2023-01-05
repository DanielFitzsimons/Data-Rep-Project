const express = require('express')
const app = express();
const port = 4000
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://root1:root1@cluster0.8kcocq3.mongodb.net/?retryWrites=true');
   //use `await mongoose.connect('mongodb://username:password@localhost:27017/test');`
}


const cdSchema = new mongoose.Schema({
    title: String,
    artist: String,
    price: String
});

const cdModel = mongoose.model('cds', cdSchema);

app.post('/api/cds',(req,res)=>{
    console.log(req.body);

    cdModel.create({
        title: req.body.title,
        artist: req.body.artist,
        price: req.body.price
    })

    res.send('Data Received');
})

app.get('/api/cds', (req,res) =>{
    cdModel.find((error, data) =>{
        res.json(data);
    })
})

app.get('/api/cd/:id' , (req, res) =>{
    console.log(req.params.id);
    cdModel.findById(req.params.id,(error,data) =>{
        res.json(data);
    })
})

app.put('/api/cd/:id', (req,res) =>{
    console.log("Update: " + req.params.id);

    cdModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (error,data)=>{
            res.send(data);
        })
})

app.delete('/api/cd/:id', (req,res)=>{
    console.log('Deleting: ' + req.params.id);
    cdModel.findByIdAndDelete({_id: req.params.id}, (error,data) =>{
        res.send(data);
    })
})




app.listen(port, () => {
    console.log(`Exampe app listening on port ${port}`)
})


