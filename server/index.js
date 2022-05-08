
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');

const {
   

} = require("./handlers");

const PORT = 8000;
const app = express()


app.use(morgan("tiny"))
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

//endpoints//




//catch all
app.get("*", (req, res) => {
    res.status(400).json({
    message: "Tags parameter is required",
    status: 400,
    
    });
})


//endpoints//

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

