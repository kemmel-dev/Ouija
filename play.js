let alphabet = "A\tB\tC\tD\tE\tF\tG\tH\tI\tJ\nL\tK\tM\tN\tO\tP\tQ\tR\tS\nT\tU\tV\tW\tX\tY\tZ";

function setup()
{
}

function draw()
{
    background(0);
    drawAlphabet();
}

function drawAlphabet()
{
    textSize(32);
    text(alphabet, width / 2, height / 2);
}

export { setup, draw }
