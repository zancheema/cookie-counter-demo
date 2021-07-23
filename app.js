const app = require("express")();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
    let count = req.cookies?.count || 0;
    res.setHeader("set-cookie", `count=${++count}`);
    res.render("index.ejs", { count });
});

app.listen(3000);