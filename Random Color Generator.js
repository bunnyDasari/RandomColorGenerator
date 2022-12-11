let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let backgroundColor = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");
backgroundColor.style.backgroundColor = bgColorsArray[0];

function buttonClicked() {
    let lengthArray = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * lengthArray);

    if (randomBgColorIndex === lengthArray) {
        randomBgColorIndex = lengthArray - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    backgroundColor.style.backgroundColor = randomBgColor;
}