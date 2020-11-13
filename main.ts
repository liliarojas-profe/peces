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
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    pesca = randint(0, 1)
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
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
/**
 * Código de los pescadores
 */
let pesca = 0
radio.setGroup(1)
pesca = 0
