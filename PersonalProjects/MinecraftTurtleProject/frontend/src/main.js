import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

$(document).ready(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
        console.log(`Connected to WebSocket Server: ${socket.url}`);
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === "createTurtle") {
            createTurtle();
            startDetection();
        } else if (data.type === "command") {
            handleCommand(data.command);
        } else if (data.type === "position") {
            updateTurtlePosition(data.x, data.y, data.z);
        } else if (data.type === "turtleInformation") {
            updateTurtleInformation(data.turtleLabel, data.turtleFuel);
        } else if (data.type === "inspectInfo") {
            updateInspectInfo(data.data);
        } else if (data.type === "detect") {
            handleCollisionDetection(data.detectForward, data.detectUp, data.detectDown);
        }
    };

    function startDetection() {
        // Ask the turtle to check for obstacles immediately upon connection
        socket.send(JSON.stringify({ type: "command", command: "detect" }));
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.getElementById("maincanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    let turtleMesh;
    let sphereMesh;
    let turtleRotation = new THREE.Euler(0, 0, 0);
    
    let mapBlocks = new Set();

    // Create turtle model
    function createTurtle() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        turtleMesh = new THREE.Mesh(geometry, material);

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
        turtleMesh.add(line);

        const sphereGeometry = new THREE.SphereGeometry(0.1);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(turtleMesh);
        turtleMesh.add(sphereMesh);
        turtleMesh.position.set(0, 0, 0);
        sphereMesh.position.z += 1;
    }

    function createMapBlock(x, y, z) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const mapBlock = new THREE.Mesh(geometry, material);
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
        mapBlock.add(line);

        mapBlock.position.set(x, y, z);
        scene.add(mapBlock);
        mapBlocks.add(`${x},${y},${z}`);
    }

    // Update turtle's position (for UI display only)
    function updateTurtlePosition(x, y, z) {
        if (!turtleMesh) createTurtle();

        let lastTurtlePOS = turtleMesh.position;

        if (!mapBlocks.has(`${x},${y},${z}`)) {
            turtleMesh.position.x = lastTurtlePOS.x;
            turtleMesh.position.y = lastTurtlePOS.y;
            turtleMesh.position.z = lastTurtlePOS.z;
        }

        // Update the position text on the UI
        $("#xposition").text(Math.round(x, 0));
        $("#yposition").text(Math.round(y, 0));
        $("#zposition").text(Math.round(z, 0));
    }

    // Update turtle information
    function updateTurtleInformation(turtleLabel, turtleFuel) {
        $("#turtlename").text(turtleLabel);
        $("#turtlefuel").text(turtleFuel);
    }

    function updateInspectInfo(data) {
        let dataName = data.name;
        $("#inspecttext").text(dataName.split(":")[1]);
    }

    function handleCollisionDetection(detectForward, detectUp, detectDown) {
        if (!turtleMesh) return;

        let pos = turtleMesh.position.clone();
        let direction = new THREE.Vector3(0, 0, 1).applyEuler(turtleRotation);
        let forwardPos = pos.clone().add(direction);
        let upPos = pos.clone().add(new THREE.Vector3(0, 1, 0));
        let downPos = pos.clone().add(new THREE.Vector3(0, -1, 0));

        if (detectForward) {
            mapBlocks.add(`${Math.round(forwardPos.x)},${Math.round(forwardPos.y)},${Math.round(forwardPos.z)}`);
            createMapBlock(forwardPos.x, forwardPos.y, forwardPos.z);
        }
        if (detectUp) {
            mapBlocks.add(`${Math.round(upPos.x)},${Math.round(upPos.y)},${Math.round(upPos.z)}`);
            createMapBlock(upPos.x, upPos.y, upPos.z);
        }
        if (detectDown) {
            mapBlocks.add(`${Math.round(downPos.x)},${Math.round(downPos.y)},${Math.round(downPos.z)}`);
            createMapBlock(downPos.x, downPos.y, downPos.z);
        }
    }

    // Create axis lines for the scene
    function createLine(start, end, color) {
        const material = new THREE.LineBasicMaterial({ color });
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        return new THREE.Line(geometry, material);
    }

    // Setup scene axes
    function setupScene() {
        const xAxis = createLine(new THREE.Vector3(-500, 0, 0), new THREE.Vector3(500, 0, 0), 0xff0000);
        const yAxis = createLine(new THREE.Vector3(0, -500, 0), new THREE.Vector3(0, 500, 0), 0x00ff00);
        const zAxis = createLine(new THREE.Vector3(0, 0, -500), new THREE.Vector3(0, 0, 500), 0x0000ff);
        scene.add(xAxis, yAxis, zAxis);
    }

    setupScene();

    // Camera setup
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 10;

    // Animation loop
    function animate() {
        controls.update();
        renderer.render(scene, camera);
    }

    // Handle movement commands
    function handleCommand(command) {
        if (!turtleMesh) createTurtle();

        let newPos = turtleMesh.position.clone();
        if (command === "up") newPos.y += 1;
        if (command === "down") newPos.y -= 1;

        if (mapBlocks.has(`${Math.round(newPos.x)},${Math.round(newPos.y)},${Math.round(newPos.z)}`)) {
            console.log("Blocked by obstacle! Cannot move up/down.");
            return;
        }

        switch (command) {
            case "forward":
                moveTurtleInDirection(1);
                break;
            case "back":
                moveTurtleInDirection(-1);
                break;
            case "left":
                turtleRotation.y += THREE.MathUtils.degToRad(90);
                updateTurtleRotation();
                break;
            case "right":
                turtleRotation.y -= THREE.MathUtils.degToRad(90);
                updateTurtleRotation();
                break;
            case "up":
                turtleMesh.position.y += 1;
                break;
            case "down":
                turtleMesh.position.y -= 1;
                break;
            case "inspect":
                break;
            default:
                console.log("Unknown command: " + command);
        }
    }

    function setButtonCooldown() {
        let buttons = []
        buttons.push($("#moveForward"));
        buttons.push($("#moveBack"));
        buttons.push($("#moveUp"));
        buttons.push($("#moveDown"));
        buttons.push($("#moveLeft"));
        buttons.push($("#moveRight"));
        for (let i = 0; i < buttons.length; ++i) {
            buttons.at(i).prop('disabled', true);
        }
        setTimeout(() => {
            for (let i = 0; i < buttons.length; ++i) {
                buttons.at(i).prop('disabled', false);
            }
        }, 2000);
    }

    function moveTurtleInDirection(direction) {
        if (!turtleMesh) return;

        const forwardVector = new THREE.Vector3(0, 0, direction);
        forwardVector.applyEuler(turtleRotation);
        let newPos = turtleMesh.position.clone().add(forwardVector);

        if (mapBlocks.has(`${Math.round(newPos.x)},${Math.round(newPos.y)},${Math.round(newPos.z)}`)) {
            console.log("Blocked by obstacle! Cannot move.");
            return;
        }

        turtleMesh.position.copy(newPos);
    }

    // Update the rotation of the turtle mesh
    function updateTurtleRotation() {
        turtleMesh.rotation.set(turtleRotation.x, turtleRotation.y, turtleRotation.z);
    }

    // Sending movement commands (for testing purpose)
    $("#moveForward").click(() => socket.send(JSON.stringify({ type: "command", command: "forward" }, setButtonCooldown())));
    $("#moveBack").click(() => socket.send(JSON.stringify({ type: "command", command: "back" }, setButtonCooldown())));
    $("#moveLeft").click(() => socket.send(JSON.stringify({ type: "command", command: "left" }, setButtonCooldown())));
    $("#moveRight").click(() => socket.send(JSON.stringify({ type: "command", command: "right" }, setButtonCooldown())));
    $("#moveUp").click(() => socket.send(JSON.stringify({ type: "command", command: "up" }, setButtonCooldown())));
    $("#moveDown").click(() => socket.send(JSON.stringify({ type: "command", command: "down" }, setButtonCooldown())));
    $("#inspectbtn").click(() => socket.send(JSON.stringify({ type: "command", command: "inspect" }, setButtonCooldown())));
});