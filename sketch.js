let qteklogo;
let xpos = 460;
const message = 'Inventory Central';
const messageX = xpos;
const messageY = 370;
const message2 = 'Wirecharts and Diagrams';
const message2X = xpos;
const message2Y = 410;
const message3 = 'Electrical Drawing';
const message3X = xpos;
const message3Y = 450;
const message4 = 'Terminalblock Layout';
const message4X = xpos;
const message4Y = 490;
const message5 = 'Backplate Layout Details';
const message5X = xpos;
const message5Y = 530;
const message6 = '';
const message6X = xpos;
const message6Y = 570;
const message7 = '';
const message7X = xpos;
const message7Y = 610;

const messageBP = 'Backplate Wirechart';
let BPpic;
const messageBPX = 14;
const messageBPY = 183;

const messageDoor = 'Door Wire Chart';
let Doorpic;
const messageDoorX = 14;
const messageDoorY = 153;

const messageBulkhead = 'Cable Layout';
let Bulkhead;
const messageBulkheadX = 14;
const messageBulkheadY = 213;

const messageTerminal = "View Terminal Spreadsheet";
let Terminal;
const messageTerminalX = 14;
const messageTerminalY = 153;

const messageBPLayout = "Backplate Lazercutter info";
let BPLayout;
const messageBPLayoutX = 14;
const messageBPLayoutY = 153;

const messageBOMLayout = "BOM and Inventory PDF";
let BOMLayout;
const messageBOMLayoutX = 14;
const messageBOMLayoutY = 153;


const NUM_IMGS = 5,
    imgs = [];
let currentImg = 0;
let backbackcounter = 0;
let counter;
let menu = true;
let wirecharts = false;
let pictures = false;
let TBlayout = false;
let cableLayout = false;
let BPlayout = false;
let inventory = false;
let btm = "Back to Main";
let btmX = 814;
let btmY = 150;
let wirechartCVS;
let terminalblock;
let terminalblock2;
let checkmark;
let inventory1;
let inventory2;
let inventory3;
let inventory4;
let inventory5;
let mySelect1;
let mySelect2;
let mySelect3;
let mySelect4;
let canvas;

function preload() {
    qteklogo = loadImage('pics/QTEK.gif');
    font = loadFont('oswald.ttf');
    let images = 16;
    // for (let i = 3; i < images; i++) {
    //     path = 'pics/TestImages' + str(i) + '.jpg' // create a path to the image
    //     loaded_image = loadImage(path)     // load the image from the path
    //     imgs.push(loaded_image)             // add the loaded path to ims
    // }
    wirechartCVS = loadTable("data/wirechart.csv", "csv", "header");
    // console.log("PPPPPPPPPP" + wirechartCVS);
}

function setup() {
    canvas = createCanvas(1200, 1000);
    canvas.position(100, 0)
    frameRate(15);
    //setupButtons();
    // console.log("pictures" + " " + pictures);
    //  console.log("menu " + " " + menu);
    counter = new Count(0, 100)
    counter.start();
    BPpic = loadImage('pics/backplate.jpg');
    Doorpic = loadImage('pics/door.jpg');
    Bulkhead = loadImage('pics/bulkhead3.jpg');

    checkmark = loadImage('pics/checkmark.png');
    terminalblock = loadImage('pics/terminalblock.jpg');
    terminalblock2 = loadImage('pics/terminalblock2.jpg');
    inventory1 = loadImage('pics/enclosure.jpg');
    inventory2 = loadImage('pics/layout.jpg');
    inventory3 = loadImage('pics/hmi.jpg');
    inventory4 = loadImage('pics/bulkhead5.jpg');    
    inventory5 = loadImage('pics/etc.jpg');


    // Doorpic.mouseClicked(window.open('http://chriscalver.com'));
}

function draw() {
    background('white');
    let rowCount = wirechartCVS.getRowCount();
    // console.log(rowCount);
    // console.log("*******" + wirechartCVS.get(3, "Color"));   


    if (menu) {
        removeElements();
        let location = 285;
        let xlocation = 460;
        let sVal = counter.s;
        let Progress = map(sVal, 0, 100, 0, 100);
        textFont(font);
        fill('grey');
        textSize(14);
        // text('ACP Digital Solutions', xpos, height - 30);
        textSize(50);
        fill(198, 0, 0);
        text('ACP Digital Solutions', xpos, 130);
        textSize(16);
        fill('black');
        text('SUPERBOMBER #23456-01', xpos, 232);
        text('Due date: 01-12-24', xpos, 255);
        //  image(qteklogo, 0, 0, qteklogo.width /2,  qteklogo.height /2);
        fill(198, 0, 0);
        textSize(14);
        let txt = text('Progress: ' + sVal + '%', xlocation, location - 5);
        rect(xlocation, location, Progress, 9)
        stroke('black')
        noFill();
        rect(xlocation, location, 100, 9)
        if (floor == 100) {
            counter.reset();
        }
        //setupButtons();
        push();
        imageMode(CENTER);
        image(qteklogo, 525, 180, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        // image(imgs[currentImg], 0, 0);
        textFont(font);
        fill('grey');
        line(460, 235, 620, 235);
        // textAlign(CENTER);
        textSize(26);
        if (isMouseInsideText(message, messageX, messageY)) {
            fill(0, 200, 255);
        } else {
            fill('grey');
        }
        text(message, messageX, messageY);    //Inventory
        if (isMouseInsideText(message2, message2X, message2Y)) {
            // cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            // cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message2, message2X, message2Y);
        if (isMouseInsideText(message3, message3X, message3Y)) {
            // cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            // cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message3, message3X, message3Y);
        if (isMouseInsideText(message4, message4X, message4Y)) {
            // cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            // cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message4, message4X, message4Y);
        if (isMouseInsideText(message5, message5X, message5Y)) {
            // cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            // cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message5, message5X, message5Y);
        if (isMouseInsideText(message6, message6X, message6Y)) {
            // cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            // cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message6, message6X, message6Y);
        // if (isMouseInsideText(message7, message7X, message7Y)) {
        //     cursor(HAND);
        //     fill(0, 200, 255);
        //     //stroke(0, 200, 255);
        // } else {
        //     cursor(ARROW);
        //     fill('grey');
        //     //  stroke(255);
        // }
        // text(message7, message7X, message7Y);       
    }

    if (inventory) {
        //removeElements();
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Inventory Central', 14, 120);

        textSize(16);
        textFont(font);
        fill('grey');
        if (isMouseInsideText(messageBOMLayout, messageBOMLayoutX, messageBOMLayoutY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageBOMLayout, messageBOMLayoutX, messageBOMLayoutY);

        let picpos = 65;  //y
        let headpos = picpos + 200;
        let selpos = picpos + 210;
        let checkpos = picpos + 190;

        textSize(20);
        fill(198, 0, 0);
        text('Enclosures', 327, headpos);
        text('Backplates', 503, headpos);
        text('Operator STN', 676, headpos);
        text('Cables', 885, headpos);
        text('Etc', 1060, headpos);

        image(inventory1, 300, picpos, inventory1.width / 4, inventory1.height / 4);
        image(inventory2, 478, picpos + 4, inventory2.width / 3.6, inventory2.height / 3.6);
        image(inventory3, 652, picpos, inventory3.width / 4.2, inventory3.height / 4.2);
        image(inventory4, 845, picpos, inventory4.width / 3.1, inventory4.height / 3.1);
        image(inventory5, 1020, picpos, inventory5.width / 6, inventory5.height / 6);

        image(checkmark, 340, checkpos, checkmark.width / 5, checkmark.height / 5);
        image(checkmark, 699, checkpos, checkmark.width / 5, checkmark.height / 5);



        //textSize(18);
        // mySelect1 = createSelect();
        // mySelect1.position(473, selpos);
        // mySelect1.option('Missing Items', 'red');
        // mySelect1.option('Enet Rec', 'green');
        // mySelect1.option('three', 'blue');
        // mySelect1.option('four', 'yellow');
        // mySelect1.selected('Missing Items');

        mySelect2 = createSelect();
        mySelect2.position(582, selpos);
        mySelect2.style('font-size', '10px');
        mySelect2.style('background-color', 'white');
        mySelect2.style('border-radius', '3px');
        mySelect2.style('width', '120px');
        //  mySelect2.style('padding', '0.5em');
        mySelect2.option('(6)Missing Items', 'red');
        mySelect2.option('4A breaker', 'green');
        mySelect2.option('2A breaker', 'blue');
        mySelect2.option('1A breaker', 'yellow');
        mySelect2.option('15A breaker', 'pink');
        mySelect2.option('Contactor1', 'black');
        mySelect2.option('Contactor2', 'orange');

        // mySelect2.selected('(6)Missing Items');

        // mySelect3 = createSelect();
        // mySelect3.position(833, selpos);
        // mySelect3.option('Missing Items', 'red');
        // mySelect3.option('two', 'green');
        // mySelect3.option('three', 'blue');
        // mySelect3.option('four', 'yellow');
        // mySelect3.selected('Missing Items');

        mySelect4 = createSelect();
        mySelect4.position(951, selpos);
        mySelect4.style('background-color', 'white');
        mySelect4.style('border-radius', '3px');
        mySelect4.style('width', '120px');
        mySelect4.style('font-size', '10px');
        //   mySelect4.style('padding', '0.2em');

        mySelect4.option('(2)Missing Items', 'red');
        mySelect4.option('1683002', 'green');
        mySelect4.option('1415943', 'blue');


        fill('blue');
        textSize(16);
        text('Good to Go!', 335, headpos + 75);
        text('Good to Go!', 694, headpos + 75);


        btmX = 14;
        btmY = 200
        text(btm, btmX, btmY);

    }



    if (wirecharts) {
        removeElements();
        textSize(16);
        textFont(font);
        fill('grey');
        text('Door Wirechart', 322, 270);
        text('Backplate Wirechart', 483, 270);
        text('Cable Layout', 685, 270);
        // image(inventory3, 845, 70, inventory4.width / 3.1, inventory4.height / 3.1);
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        // image(Doorpic, 350, 170, Doorpic.width / 4, Doorpic.height / 4);
        // //Doorpic.mouseClicked(window.open('http://chriscalver.com'));
        // image(BPpic, 550, 170, BPpic.width / 3.8, BPpic.height / 3.8);
        // image(Bulkhead, 820, 170, Bulkhead.width / 3, Bulkhead.height / 3);
        pop();

        image(inventory1, 300, 65, inventory1.width / 4, inventory1.height / 4);
        image(inventory2, 478, 65 + 4, inventory2.width / 3.6, inventory2.height / 3.6);
        image(inventory4, 652, 65, inventory3.width / 4.2, inventory3.height / 4.2);

        textSize(30);
        fill(198, 0, 0);
        text('Wirecharts', 14, 120);
        textFont(font);
        fill('grey');
        textSize(20);
        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        btmX = 14;
        btmY = 270
        text(btm, btmX, btmY);
        if (isMouseInsideText(messageBP, messageBPX, messageBPY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageBP, messageBPX, messageBPY);

        if (isMouseInsideText(messageDoor, messageDoorX, messageDoorY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageDoor, messageDoorX, messageDoorY);
        if (isMouseInsideText(messageBulkhead, messageBulkheadX, messageBulkheadY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageBulkhead, messageBulkheadX, messageBulkheadY);
        // image(imgs[currentImg], 20, 20, imgs[currentImg].width / 4, imgs[currentImg].height / 4);
    }

    if (pictures) {
        image(imgs[currentImg], 20, 20, imgs[currentImg].width / 4, imgs[currentImg].height / 4);
        push();
        imageMode(CENTER);
        image(qteklogo, 880, 50, qteklogo.width / 2, qteklogo.height / 2);
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        fill('blue');
        textSize(16);
        btmX = 814;
        btmY = 150
        text(btm, btmX, btmY);
        if (backbackcounter < 1) {
            //  setupButtons();
        }
        previous.position(1090 + 80, 90);
        next.position(1150 + 80, 90);
        backbackcounter++;
        //console.log(backbackcounter);
    }

    if (TBlayout) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Terminal Block Layout', 14, 120);
        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        btmX = 14;
        btmY = 210
        text(btm, btmX, btmY);

        //text(messageTerminal, messageTerminalX, messageTerminalY);
        if (isMouseInsideText(messageTerminal, messageTerminalX, messageTerminalY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageTerminal, messageTerminalX, messageTerminalY);


        image(terminalblock2, 370, 350, terminalblock2.width / 1.5, terminalblock2.height / 1.5);

        image(terminalblock, 380, 50, terminalblock.width / 2.5, terminalblock.height / 2.5);

    }
    if (cableLayout) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Cable Layout', 14, 120);
        fill('blue');
        textSize(16);
        btmX = 14;
        btmY = 150
        text(btm, btmX, btmY);
    }

    if (BPlayout) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Backplate Layout', 14, 120);
        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        btmX = 14;
        btmY = 210
        text(btm, btmX, btmY);

        if (isMouseInsideText(messageBPLayout, messageBPLayoutX, messageBPLayoutY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(messageBPLayout, messageBPLayoutX, messageBPLayoutY);



    }



}
// end of draw
var setupButtons = _ => {
    previous = createButton('Prev');
    previous.position(1090 + 80, 90);
    if (menu) {
        previous.position(-940, 100);
    }
    previous.mouseClicked(_ => {
        if (currentImg > 0) currentImg--;
    });
    next = createButton('Next');
    next.position(1150 + 80, 90);
    if (menu) {
        next.position(-1020, 100);
    }
    next.mouseClicked(_ => {
        if (currentImg < imgs.length - 1) currentImg++;
    });
};

function mouseClicked() {
    if (isMouseInsideText(btm, btmX, btmY)) {
        //previous.position(-940, 100);
        //next.position(-1020, 100);
        //setupButtons();
        wirecharts = false;
        pictures = false;
        TBlayout = false;
        cableLayout = false;
        BPlayout = false;
        inventory = false;
        menu = true;
    }
    if (menu) {
        if (isMouseInsideText(message, messageX, messageY)) {
            //  menu = false;
            //window.open('http://www.chriscalver.com/', '_blank');
            // window.open('/pics/QTEK.gif', '_blank');
            // window.open('data/Wirechart.pdf', '_blank');
            inventory = true;
            menu = false;
        }
        if (isMouseInsideText(message2, message2X, message2Y)) {
            wirecharts = true;
            menu = false;
        }
        if (isMouseInsideText(message3, message3X, message3Y)) {
            window.open('data/Electrical.pdf', '_blank');
        }
        if (isMouseInsideText(message4, message4X, message4Y)) {
            TBlayout = true;
            menu = false;
        }
        if (isMouseInsideText(message5, message5X, message5Y)) {
            BPlayout = true;
            menu = false;
        }
        if (isMouseInsideText(message6, message6X, message6Y)) {
            cableLayout = true;
            menu = false;
        }
    }
    // if (isMouseInsideText(message7, message7X, message7Y)) {
    //     inventory = true;
    //     menu = false;
    // }
    if (inventory) {

        if (isMouseInsideText(messageBOMLayout, messageBOMLayoutX, messageBOMLayoutY)) {
            window.open('data/QtekBOM.pdf', '_blank');
        }

    }
    if (wirecharts) {
        if (isMouseInsideText(messageBP, messageBPX, messageBPY)) {
            window.open('data/QTEKbackplateWirechart.pdf', '_blank');
        }
        if (isMouseInsideText(messageDoor, messageDoorX, messageDoorY)) {
            window.open('data/QTEKdoorWirechart.pdf', '_blank');
        }
        if (isMouseInsideText(messageBulkhead, messageBulkheadX, messageBulkheadY)) {
            window.open('data/QTEKbulkheadCablechart.pdf', '_blank');
        }
        console.log("X " + mouseX);
        console.log("Y " + mouseY);
        if (mouseX > 300 && mouseX < 430 && mouseY > 70 && mouseY < 275) {
            window.open('data/QTEKdoorWirechart.pdf', '_blank');
        }
        if (mouseX > 475 && mouseX < 600 && mouseY > 70 && mouseY < 275) {
            window.open('data/QTEKbackplateWirechart.pdf', '_blank');
        }
        if (mouseX > 650 && mouseX < 800 && mouseY > 70 && mouseY < 281) {
            window.open('data/QTEKbulkheadCablechart.pdf', '_blank');
        }
    }
    if (TBlayout) {
        if (isMouseInsideText(messageTerminal, messageTerminalX, messageTerminalY)) {
            window.open('data/QTEKbackplateWirechart.pdf', '_blank');
        }

    }

    if (BPLayout) {
        window.open('data/QTEKbackplateWirechart.pdf', '_blank');

    }

}
function isMouseInsideText(message, messageX, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();
    return mouseX > messageX && mouseX < messageX + messageWidth &&
        mouseY > messageTop && mouseY < messageBottom;
}
// function isMouseInsideText(message, messageX, messageY) {
//     const messageWidth = textWidth(message);
//     const messageTop = messageY - textAscent();
//     const messageBottom = messageY + textDescent();
//     return mouseX > messageX && mouseX < messageX + messageWidth &&
//         mouseY > messageTop && mouseY < messageBottom;
// }
class Count {
    constructor(s, w) {
        this.s = s
        this.w = w
        this.p = createP('')
    }
    start() {
        if (!this.done) {
            setInterval(() => this.counter(), this.w)
        }
    }
    counter() {
        if (this.s < 24) {
            this.s = this.s + 4
            //this.p.html(this.s)
        }
    }
    reset() {
        this.s = 0
    }
}