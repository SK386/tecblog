const session = require("express-session")
const app = require("/index.js")

app.use(session({secret:'23e3f3ef4f5f'}));

