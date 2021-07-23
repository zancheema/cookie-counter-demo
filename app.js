const app = require("express")();

let count = 0;

app.get("/", (req, res) => {
    res.render("index.ejs", { count: count++ });
});

app.listen(3000);