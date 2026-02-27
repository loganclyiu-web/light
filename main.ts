robotbit.rgb().setBrightness(50)
basic.forever(function () {
    if (input.lightLevel() < 10) {
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(2000)
    } else {
        robotbit.rgb().clear()
        robotbit.rgb().show()
    }
})
