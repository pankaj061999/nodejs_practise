const express = require("express");
const path = require("path")
const app = express();

const port = 3000

// console.log(__dirname);
// console.log(__filename)

// define path for dynamics
const localpath = path.join(__dirname, "../views")
const viewpath = path.join(__dirname, "../templets")

// handle hbs or handlebar location and view engine
app.set('view engine', 'hbs');
app.set('views', viewpath);

// setup statcic directiory path
app.use(express.static(localpath))


app.get('', (req, res)=> {
    res.render("index", {
        title: 'Weather',
        name: 'Pankaj '
    })
})

app.get('/pankaj', (req, res)=> {
    console.log("query string:", req.query.tab)
    if(!req.query.tab){
        res.send({
            error: "this is error message not found tab"
        })
    }
    res.send({
        product: []
    })
})


app.get('*', (req, res)=> {
    res.send("My 404 page")
})

// app.get('/', (req, res)=> {
//     res.send("pankj <h1>Pankaj Kumar Meena</h1>")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})