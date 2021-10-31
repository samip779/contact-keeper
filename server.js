const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ msg: "welcome to contact keeper" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
