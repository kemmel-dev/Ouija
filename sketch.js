import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, get, ref, child, set, push} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

import { draw as drawTitle, setup as setupTitle } from "./titlescreen.js"
import { draw as drawPlay, setup as setupPlay } from "./play.js"
import { draw as drawHost, setup as setupHost } from "./host.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Scenes = {
    Title: 0,
    Play: 1,
    Host: 2
}

var currentScene = Scenes.Title;

window.setup = function() 
{
    let canvas = createCanvas(400,400);
    canvas.parent("sketch-holder");
    canvas.id("sketch");
    textAlign(CENTER);

    setupScenes();
}

window.draw = function () {
    switch(currentScene)
    {
        case Scenes.Title:
            drawTitle();
            break;
        case Scenes.Play:
            drawPlay();
            break;
        case Scenes.Host:
            drawHost();
            break;
        break;
    }
}

function setupScenes()
{
    setupTitle();
    setupHost();
    setupPlay();
}

async function checkRoomCode(roomCode)
{
    return get(child(ref(database), `rooms/${roomCode}`)).then((snapshot) => {
        console.log("in checkroomcode");
        return snapshot.exists();
      }).catch((error) => {
        console.error(error);
        return null;
      });
}

const newRoom = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0}

function createRoom(roomCode)
{
    set(ref(database, `rooms/${roomCode}`), newRoom);
}


export { checkRoomCode, createRoom }