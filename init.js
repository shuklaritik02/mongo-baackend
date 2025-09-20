const mongoose = require("mongoose");
//const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

}


const Chat = require("./models/chat.js");

// Dummy data
const allChats = [
  {
    from: "shivani",
    to: "ritik",
    message: "Hello Ritik, kya haal hai?",
    created: new Date(),
  },
  {
    from: "ritik",
    to: "shivani",
    message: "Main thik hu, tum batao?",
    created: new Date(),
  },
  {
    from: "anita",
    to: "rahul",
    message: "Kal movie chale?",
    created: new Date(),
  },
  {
    from: "rahul",
    to: "anita",
    message: "Haan bilkul, kaunsi movie?",
    created: new Date(),
  },
  {
    from: "mohit",
    to: "priya",
    message: "Good morning 😊",
    created: new Date(),
  },
];

// Insert many
Chat.insertMany(allChats)
  .then((res) => {
    console.log("Chats inserted successfully!");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


