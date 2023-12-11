let qteklogo;
let xpos = 460;
const message = 'Wire Chart';
const messageX = xpos;
const messageY = 330;
const message2 = 'Electrical Drawing';
const message2X = xpos;
const message2Y = 370;
const message3 = 'Pictures';
const message3X = xpos;
const message3Y = 410;
const message4 = 'Terminal Layout';
const message4X = xpos;
const message4Y = 450;
const message5 = 'Cable Layout Chart';
const message5X = xpos;
const message5Y = 490;
const message6 = 'Backplate Layout';
const message6X = xpos;
const message6Y = 530;

const NUM_IMGS = 5,
    imgs = [];
let currentImg = 0;
let counter = 0;


let menu = true;
let pictures = false;
let btm = "Back to Main";
function preload() {
    qteklogo = loadImage('pics/QTEK.gif');
    font = loadFont('oswald.ttf');

    // for (let i = 0; i < NUM_IMGS; i++) {
    //     imgs[i] = loadImage(`http://picsum.photos/640/360/?random?sig=${i}`);
    //   }
    let images = 7;
    for (let i = 0; i < images; i++) {
        path = 'pics/' + str(i) + '.jpg' // create a path to the image
        loaded_image = loadImage(path)     // load the image from the path
        imgs.push(loaded_image)             // add the loaded path to ims
    }
    console.log(imgs);

}

function setup() {
    createCanvas(1200, 1000);
    //setupButtons();
    console.log("pictures" + " " + pictures);
    console.log("menu " + " " + menu);

}




function draw() {
    background('white');









    if (menu) {
        setupButtons();
        push();
        imageMode(CENTER);
        image(qteklogo, 550, 130, qteklogo.width, qteklogo.height);
        pop();
        // image(imgs[currentImg], 0, 0);
        textFont(font);
        fill('grey');
        line(460, 235, 725, 235);
        // textAlign(CENTER);
        textSize(26);
        if (isMouseInsideText(message, messageX, messageY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message, messageX, messageY);
        if (isMouseInsideText(message2, message2X, message2Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message2, message2X, message2Y);
        if (isMouseInsideText(message3, message3X, message3Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message3, message3X, message3Y);
        if (isMouseInsideText(message4, message4X, message4Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message4, message4X, message4Y);
        if (isMouseInsideText(message5, message5X, message5Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message5, message5X, message5Y);
        if (isMouseInsideText(message6, message6X, message6Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message6, message6X, message6Y);
        textFont(font);
        fill('grey');
        textSize(14);
        // text('ACP Digital Solutions', xpos, height - 30);
        textSize(32);
        fill(198, 0, 0);
        text('ACP Digital Solutions', xpos, 230);
        textSize(20);
        fill('black');
        text('SUPERBOMBER #23352', xpos, 257);
        //image(qteklogo, 0, 0, qteklogo.width /2,  qteklogo.height /2);

    }




    
    if (pictures) {
        
        //menu = false;
        //console.log(pictures)     
        //setupButtons();
        image(imgs[currentImg], 20, 20, imgs[currentImg].width / 4, imgs[currentImg].height /4);
       
        push();
        imageMode(CENTER);
        image(qteklogo, 880, 50, qteklogo.width/2, qteklogo.height/2);
        //image(qteklogo, imgs[currentImg].width / 4 + 100, 50, qteklogo.width / 2, qteklogo.height / 2);
        pop();

        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        
        text(btm, 814, 150);
         
        if(counter < 1){
        setupButtons();
        }
        previous.position(1090 + 80, 90);
next.position(1150 + 80, 90);

        counter++;
        console.log(counter);
        //  setupButtons();
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
    if (isMouseInsideText(message, messageX, messageY)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        // window.open('/pics/QTEK.gif', '_blank');
        window.open('data/Wirechart.pdf', '_blank');
    }

    if (isMouseInsideText(message2, message2X, message2Y)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        window.open('data/Electrical.pdf', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }

    if (isMouseInsideText(message3, message3X, message3Y)) {

        pictures = true;

        menu = false;
        console.log("pictures" + " " + pictures);
        console.log("menu " + " " + menu);

        //window.open('http://www.chriscalver.com/', '_blank');
        //window.open('/pics/0.jpg', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }
    if (isMouseInsideText(btm, 814, 150)) {

        previous.position(-940, 100);
        next.position(-1020, 100);
          menu = true;
          //setupButtons();

          pictures = false;
          
        //window.open('http://www.chriscalver.com/', '_blank');
        // window.open('/pics/QTEK.gif', '_blank');
        //window.open('data/Wirechart.pdf', '_blank');
    }
}

function isMouseInsideText(message, messageX, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();

    return mouseX > messageX && mouseX < messageX + messageWidth &&
        mouseY > messageTop && mouseY < messageBottom;
}

