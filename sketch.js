var gameState,turn,plevel,gLevel, string1,string2,string3,string4,string5,string6,string7,string8,string9,string10,string11
var kingdomName,kingdomNameInput,button,confirmed,confirmedFalse,confirmedTrue

function preload() {

}

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    gLevel = 0
}

function draw() {
    while (gLevel === 0) {
        kingdomNameInput = createInput("Insert your kingdom's name here")
        kingdomNameInput.position(displayWidth/2 - 40, displayHeight/2 - 40)
        button = createButton('Okay')
        button.position(displayWidth/2+20,displayHeight/2-20)
        button.mousePressed(()=>{
            //kingdomNameInput.hide()
            //button.hide()
            nameOfKingdom.name = kingdomNameInput.value()
            kingdomNameInput.delete()
            text1 = text("Is this your kingdom's name?",displayWidth/2-50, displayHeight/2-50)
            
            confirmedTrue = createButton("Yes")
            confirmedTrue.position(displayWidth/2-80,displayHeight/2)

            confirmedFalse = createButton("No")
            confirmedFalse.position(displayWidth/2+80,displayHeight/2)

            confirmedFalse.mousePressed(()=>{
                kingdomNameInput.display()
                button.display()
                text1.hide()
                confirmedTrue.delete()
                confirmedFalse.delete()
            })

            confirmedTrue.mousePressed(()=>{
                gLevel = 1
                confirmedFalse.delete()
                button.delete()
                text1.delete()
                confirmedTrue.delete()
            })
        })
    }

    if (gLevel === 1) {
        text2 = text("The kingdom of ", kingdomName," was a peaceful kingdom.\nThat changed when the mysterious dark emporer attacked\nPress space to continue",displayWidth/2-100,displayHeight/2-30)
        if (keyReleased(32)) {
            text2 = text("Where...am I?\nPress space to continue",displayWidth/2-100,displayHeight/2-30)
            if (keyReleased(32)) {
                text2 = text("Aaaaaaaah!!!\nPress space to continue",displayWidth/2-100,displayHeight/2-30)
                if(keyReleased(32)) {
                    text2 = text("",displayWidth-999999999999999999999999999999999,displayHeight-999999999999999999999999999999999999)
                    gameState = 1
                }
            }
        }
    }
    if (gameState = 1) {
        if (gLevel = 1) {
            
        }
    }
}

function hide() {
    button.mousePressed(()=>{
        kingdomNameInput.hide()
        button.hide()
    })
}