const express = require("express");
const app = express();

// app.get("/", function(request, response) {
//     console.log(request);
//     response.send("Hello <strong>Omar</strong>");
// })

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended : true}))


app.use(express.urlencoded({extended: true}));

app.get(["", "/", "/index"], function(request, response) {
    response.sendFile(__dirname + "/index.html");
})

app.get("/about", function(request, response) {
    response.send(`<ol>
    <li>Nidhal</li>
    <li>Faouzia</li>
    <li>Elyes</li>
    </ol>
    `)
})

app.post("/", (req, res) => {
    console.log(req.body);
    //res.send("En cours de traitement...");
    let result = parseInt(req.body.op1) + Number(req.body.op2);
    res.send("<h3> Le résult est " + result + " </h3>");
    
})

app.listen(3000, function() {
    console.log("Server started on port 3000 !")
});

