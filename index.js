const express = require("express");

const app = express();
const PORT = 3000;


const posts = [
    {
        id: 1,
        title: "Ciambellone",
        content: "1",
        image: "/img/ciambellone.jpeg",
        tags: ["dolce", "colazione"]
    },
    {
        id: 2,
        title: "Cracker alla barbabietola",
        content: "2",
        image: "/img/cracker_barbabietola.jpeg",
        tags: ["salato", "snack", "barbabietola"]
    },
    {
        id: 3,
        title: "Pane fritto dolce",
        content: "3",
        image: "/img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "tradizione"]
    },
    {
        id: 4,
        title: "Pasta alla barbabietola",
        content: "4",
        image: "/img/pasta_barbabietola.jpeg",
        tags: ["pasta", "primo", "barbabietola"]
    },
    {
        id: 5,
        title: "Torta paesana",
        content: "5",
        image: "/img/torta_paesana.jpeg",
        tags: ["dolce", "pane", "lombardia"]
    }
];

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});