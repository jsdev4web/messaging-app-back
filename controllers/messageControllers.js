

async function messageHome(req, res) {
    res.send("Base Home Page")
}

//store all of my messages
let messages = [];

//send message
async function messageAction(req, res){
   const newMessage = req.body;

  messages.push(newMessage);

  console.log("stored:", messages);

  // send messages back to frontend
  res.json(messages);
   
}

async function messageActionGet(req, res) {
  try {
    res.json(messages);
  } catch (error) {
    console.error("GET /message/action error:", error);
    res.status(500).json({ error: "server error" });
  }
}

async function messageClear(req, res) {
  try {
    messages = []
  } catch (error) {
    console.error("GET /message/action error:", error);
    res.status(500).json({ error: "server error" });
  }
}


export { messageHome, messageAction, messageActionGet, messageClear } 