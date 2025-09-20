const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const dirnamePath = __dirname; 
app.set("views", path.join(dirnamePath, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(dirnamePath, "public")));

main()
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
app.get("/", (req, res) => {
  res.send("app is working");
});

app.get("/chats", async (req, res) => {
  try {
    const allchats = await Chat.find(); 
    res.render("index", { allchats }); 
  } catch (err) {
    console.log(err);
    res.send("Error fetching chats");
  }
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});