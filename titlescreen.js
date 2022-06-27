import { pushdb, incrementer } from "./sketch.js"

let roomcodeField, joinButton;

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

export { setup, draw } 
