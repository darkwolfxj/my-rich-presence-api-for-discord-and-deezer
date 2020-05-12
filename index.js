require("dotenv").config();

const server = require("./api/server");
const port = 5000;

server.listen(port, () => {
    console.log(`*** Listening on port ${ port }***`)
})