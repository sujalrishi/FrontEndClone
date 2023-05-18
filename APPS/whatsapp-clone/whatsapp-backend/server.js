import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js"
import Pusher from 'pusher';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 9000;


const pusher = new Pusher({
  appId: "1259360",
  key: "57f031e06cd00b856a61",
  secret: "41bffa7588b69476a34f",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});


app.use(express.json());

app.use(cors());

const connectionUrl = `mongodb+srv://admin:sujalnageshrishi05122003@cluster0.eosj5.mongodb.net/whatsappdb?retryWrites=true&w=majority`


mongoose.connect(connectionUrl);

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB is connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log("a change occured", change);

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.user,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                receieved: messageDetails.receieved,

            });
        } else {
            console.log("Error triggering Pusher");
        }
    })
})

app.get('/', (req, res) => res.status(200).send('hello world!!!'))


app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.listen(port, () => console.log(`Listening on localhost:${port}`));