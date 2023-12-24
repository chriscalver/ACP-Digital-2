let qteklogo;
let xpos = 460;
const message = 'Wire Charts';
const messageX = xpos;
const messageY = 370;
const message2 = 'Electrical Drawing';
const message2X = xpos;
const message2Y = 410;
const message3 = 'Inventory Shortages';
const message3X = xpos;
const message3Y = 450;
const message4 = 'Terminalblock Layout';
const message4X = xpos;
const message4Y = 490;
const message5 = 'Cable Chart ';
const message5X = xpos;
const message5Y = 530;
const message6 = 'Backplate Layout';
const message6X = xpos;
const message6Y = 570;
// const message7 = 'Inventory';
// const message7X = xpos;
// const message7Y = 610;
const messageBP = 'Backplate Wire Chart';
let BPpic;
const messageBPX = 14;
const messageBPY = 153;

const messageDoor = 'Door Wire Chart';
let Doorpic;
const messageDoorX = 14;
const messageDoorY = 183;

const messageBulkhead = 'Bulkhead Layout';
let Bulkhead;
const messageBulkheadX = 14;
const messageBulkheadY = 213;

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

//let wirechartCVS;

function preload() {
    qteklogo = loadImage('pics/QTEK.gif');
    font = loadFont('oswald.ttf');
    let images = 16;
    // for (let i = 3; i < images; i++) {
    //     path = 'pics/TestImages' + str(i) + '.jpg' // create a path to the image
    //     loaded_image = loadImage(path)     // load the image from the path
    //     imgs.push(loaded_image)             // add the loaded path to ims
    // }
    //  wirechartCVS = loadTable("/data/wirechart.csv", "csv", "header");
}

function setup() {
    createCanvas(1200, 1000);
    //setupButtons();
    // console.log("pictures" + " " + pictures);
    //  console.log("menu " + " " + menu);
    counter = new Count(0, 100)
    counter.start();
    BPpic = loadImage('pics/backplate.jpg');
    Doorpic = loadImage('pics/door.jpg');
    Bulkhead = loadImage('pics/bulkhead2.jpg')
    // Doorpic.mouseClicked(window.open('http://chriscalver.com'));
}

function draw() {
    background('white');

    // let rowCount = wirechartCVS.getRowCount();
    // console.log(rowCount);
    // console.log(wirechartCVS.get(4, "Color"));   



    if (menu) {
        let location = 285;
        let xlocation = 460;
        let sVal = counter.s;
        let Progress = map(sVal, 0, 100, 0, 100);

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

        setupButtons();
        push();
        imageMode(CENTER);
        image(qteklogo, 525, 180, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        // image(imgs[currentImg], 0, 0);
        textFont(font);
        fill('grey');

        line(460, 235, 760, 235);
        // textAlign(CENTER);
        textSize(26);

        if (isMouseInsideText(message, messageX, messageY)) {
                fill(0, 200, 255);
         } else {
            fill('grey');
        }
        text(message, messageX, messageY);

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

        textFont(font);
        fill('grey');
        textSize(14);
        // text('ACP Digital Solutions', xpos, height - 30);
        textSize(50);
        fill(198, 0, 0);
        text('ACP Digital Solutions', xpos, 130);
        textSize(14);
        fill('black');
        text('SUPERBOMBER #23456-01', xpos, 232);
        text('Due date: 01-12-24', xpos, 255);

        //image(qteklogo, 0, 0, qteklogo.width /2,  qteklogo.height /2);
    }

    if (wirecharts) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);

        image(Doorpic, 450, 200, Doorpic.width / 2.6, Doorpic.height / 2.6);
        //Doorpic.mouseClicked(window.open('http://chriscalver.com'));
        image(BPpic, 750, 200, BPpic.width / 2.5, BPpic.height / 2.5);
        image(Bulkhead, 600, 460, Bulkhead.width / 2, Bulkhead.height / 2);

        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
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
            setupButtons();
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
        btmY = 150
        text(btm, btmX, btmY);
    }

    if (cableLayout) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
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
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Backplate Layout', 14, 120);

        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        btmX = 14;
        btmY = 150
        text(btm, btmX, btmY);
    }

    if (inventory) {
        push();
        imageMode(CENTER);
        image(qteklogo, 80, 50, qteklogo.width / 2, qteklogo.height / 2);
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();
        textSize(30);
        fill(198, 0, 0);
        text('Inventory', 14, 120);
        fill('blue');
        textSize(16);
        btmX = 14;
        btmY = 150
        text(btm, btmX, btmY);
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
        previous.position(-940, 100);
        next.position(-1020, 100);

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
            wirecharts = true;
            menu = false;
        }

        if (isMouseInsideText(message2, message2X, message2Y)) {
            window.open('data/Electrical.pdf', '_blank');
        }
        if (isMouseInsideText(message3, message3X, message3Y)) {
            inventory = true;
            menu = false;
        }

        if (isMouseInsideText(message4, message4X, message4Y)) {
            TBlayout = true;
            menu = false;
        }

        if (isMouseInsideText(message5, message5X, message5Y)) {
            cableLayout = true;
            menu = false;
        }

        if (isMouseInsideText(message6, message6X, message6Y)) {
            BPlayout = true;
            menu = false;
        }

    }
    // if (isMouseInsideText(message7, message7X, message7Y)) {
    //     inventory = true;
    //     menu = false;
    // }

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

        if(mouseX > 317 && mouseX < 580 && mouseY > 28 && mouseY < 351){
            window.open('data/QTEKdoorWirechart.pdf', '_blank');
        }
       
        if(mouseX > 611 && mouseX < 890 && mouseY > 28 && mouseY < 351){
            window.open('data/QTEKbackplateWirechart.pdf', '_blank');
        }

        if(mouseX > 440 && mouseX < 771 && mouseY > 390 && mouseY < 531){
            window.open('data/QTEKbulkheadCablechart.pdf', '_blank');
        }        

    }
}


function isMouseInsideText(message, messageX, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();
    return mouseX > messageX && mouseX < messageX + messageWidth &&
        mouseY > messageTop && mouseY < messageBottom;
}

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