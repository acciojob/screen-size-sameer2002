//your JS code here. If required.
function resize() {
	const width = window.innerWidth;
    const heigth = window.innerHeight;

    const div = document.getElementById("sizeInfo");

    div.innerHTML = `<h1>Width: ${width} and Height: ${heigth}`
}
 window.addEventListener("resize",resize);

 resize();