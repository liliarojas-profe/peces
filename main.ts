enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    pesca = randint(1, 10)
    radio.sendNumber(pesca)
    if (pesca > 0) {
        basic.showLeds(`
            # . # # .
            # # # # #
            # # # # #
            # . # # .
            . . . . .
            `)
        basic.showNumber(pesca)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    pesca += randint(0, 1)
    radio.sendNumber(pesca)
    if (pesca > 0) {
        basic.showLeds(`
            # . # # .
            # # # # #
            # # # # #
            # . # # .
            . . . . .
            `)
        basic.showNumber(pesca)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let pesca = 0
radio.setGroup(1)
pesca = 0
