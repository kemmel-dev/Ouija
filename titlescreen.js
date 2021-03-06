import {checkRoomCode, createRoom} from "./sketch.js"

let roomcodeField, joinButton, hostButton;

function setup()
{
    roomcodeField = createInput('');
    roomcodeField.size(100); 
    roomcodeField.parent("sketch-holder");
    roomcodeField.center();
    console.log(roomcodeField.position());

    joinButton = createButton("Join!");
    joinButton.parent("sketch-holder");
    joinButton.center();
    joinButton.position(joinButton.position().x, joinButton.position().y + width / 8)
    joinButton.mousePressed(join);


    hostButton = createButton("Host!");
    hostButton.parent("sketch-holder");
    hostButton.center();
    hostButton.position(hostButton.position().x, hostButton.position().y - width / 6)
    hostButton.mousePressed(host);

}

function draw()
{
    background(125);
    fill(255);
    text("Enter room code:", width / 2, height / 2.3);

}

function join() 
{
    incrementer(roomcodeField.value());
    roomcodeField.hide();
    joinButton.hide();
}

async function host()
{
    var exists = false, roomCode;
    for(var i = 0; i < 5; i++)
    {
        roomCode = Math.random().toString(36).slice(2, 7);
        if (await checkRoomCode(roomCode))
        {
            exists = true;
            break;
        }
    }
    
    if (!exists)
    {
        createRoom(roomCode);
    }
}

export { setup, draw } 
