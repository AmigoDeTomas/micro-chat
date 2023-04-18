radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    let smile = ""
    basic.showIcon(IconNames.Happy)
    if (receivedString == smile) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("1")
})
radio.setGroup(69)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
