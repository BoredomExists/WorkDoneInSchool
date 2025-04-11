const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
const wss = new WebSocket.Server({ port: 3001 }); // WebSocket for CC:Tweaked

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Express server is running!");
});

let clients = []

wss.on('connection', (ws) => {
    console.clear();
    console.log(`Client connected`);

    clients.push(ws);

    ws.send(JSON.stringify({ type: "createTurtle" }));

    ws.on('message', (msg) => {
        const data = JSON.parse(msg);
        if (data.type == 'command') {
            sendCommandToTurtles(data.command);
        } else if (data.type === 'position') {
            sendPositionToClients(data.x, data.y, data.z);
        } else if (data.type === "turtleInformation") {
            sendTurtleInfoToClients(data.turtleLabel, data.turtleFuel);
        } else if (data.type === "inspectInfo") {
            sendInspectInfoToWeb(data.data);
        } else if (data.type === "detect") {
            sendDetectionToWeb(data.detectForward, data.detectUp, data.detectDown);
        }
    });

    ws.on("close", () => {
        clients = clients.filter(client => client !== ws);
    });
});

function sendCommandToTurtles(command) {
    clients.forEach((client) => {
        client.send(JSON.stringify({ type: 'command', command: command }));
    });
}

function sendPositionToClients(x, y, z) {
    clients.forEach((client) => {
        client.send(JSON.stringify({
            type: "position",
            x: x,
            y: y,
            z: z
        }));
    });
}

function sendTurtleInfoToClients(turtleLabel, turtleFuel) {
    clients.forEach((client) => {
        client.send(JSON.stringify({
            type: "turtleInformation",
            turtleLabel: turtleLabel,
            turtleFuel: turtleFuel
        }));
    });
}

function sendInspectInfoToWeb(data) {
    clients.forEach((client) => {
        client.send(JSON.stringify({
            type: "inspectInfo",
            data: data
        }));
    });
}

function sendDetectionToWeb(detectForward, detectUp, detectDown) {
    clients.forEach((client) => {
        client.send(JSON.stringify({
            type: "detect",
            detectForward: detectForward,
            detectUp: detectUp,
            detectDown: detectDown
        }));
    });
}

app.listen(3000, () => console.log('Express server running on port 3000'));