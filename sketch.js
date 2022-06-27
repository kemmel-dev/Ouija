// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, increment } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import { draw as drawTitle, setup as setupTitle } from "./titlescreen.js"
import { draw as drawPlay, setup as setupPlay } from "./play.js"

let app, database;

const Scenes = {
    Title: 0,
    Play: 1
}

var currentScene = Scenes.Title;

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyALXOuUs1htkIUVRzl6-tTSsJZNpZzuSdw",

  authDomain: "ouija-273ba.firebaseapp.com",

  databaseURL: "https://ouija-273ba-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "ouija-273ba",

  storageBucket: "ouija-273ba.appspot.com",

  messagingSenderId: "501172041925",

  appId: "1:501172041925:web:68fad9bce231d7ba1e98ac"

};

window.setup = function () {
    let canvas = createCanvas(400,400);
    canvas.parent("sketch-holder");
    canvas.id("sketch");

    textAlign(CENTER);

    setupScenes();
    initFirebase();
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
        break;
    }
}

function setupScenes()
{
    setupTitle();
    setupPlay();
}

function initFirebase()
{
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
}

function pushdb(roomCode)
{
    set(ref(database, roomCode), { a: 1});
}

const incrementer = async (roomcode) => {
    await set(ref(database, roomcode), {
        b: increment(1)
    });
    currentScene = Scenes.Play;
  } 

export { pushdb, incrementer }