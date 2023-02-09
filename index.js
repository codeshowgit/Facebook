require("dotenv").config()
const App = require("./App");

const PORT = process.env.PORT || 4000

App.listen(PORT, ()=>{
    console.log("Server Runn Succes http://localhost:4000")
})

// fasdf