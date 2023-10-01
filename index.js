function chooseColor(value) {
    data.push({ input: color, output: [value] });
    setRandomColors();
}
function print() {
    console.log(JSON.stringify(data));
}
function setRandomColors() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    };

    const guess = net.run(color)[0];
    console.log(guess);
    guessEl.style.color = guess > 0.5 ? "#fff" : "#000";
    colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
        color.b * 255
    })`;
}

/**
 * UP Function
 */

const net = new brain.NeuralNetwork();

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.6240622286459219,"g":0.5019896369457253,"b":0.4639859519229218},"output":[1]},{"input":{"r":0.7463263004246717,"g":0.5198256800158122,"b":0.9953835506937971},"output":[1]},{"input":{"r":0.5533001386274817,"g":0.61106576077071,"b":0.09597957699156712},"output":[1]},{"input":{"r":0.6148820337886683,"g":0.4399018304512967,"b":0.4688177572902503},"output":[1]},{"input":{"r":0.8322347038429007,"g":0.820868814870758,"b":0.7894142488369431},"output":[1]},{"input":{"r":0.9546580356191537,"g":0.5138696196610296,"b":0.5204580281709511},"output":[1]},{"input":{"r":0.21236924593561124,"g":0.8040274829521226,"b":0.4936895246523162},"output":[0]},{"input":{"r":0.33097142197689555,"g":0.632828113940221,"b":0.02914401414458989},"output":[0]},{"input":{"r":0.42161844667020154,"g":0.9888250097292862,"b":0.6838279206855112},"output":[0]},{"input":{"r":0.44958994227456706,"g":0.8938280962563597,"b":0.22423925676524648},"output":[0]},{"input":{"r":0.8207853871411411,"g":0.8891867406779886,"b":0.4532899636524993},"output":[0]},{"input":{"r":0.573248261627015,"g":0.9356583238085437,"b":0.2795894316592663},"output":[0]},{"input":{"r":0.0822834328692178,"g":0.7038997316163157,"b":0.08974769099397883},"output":[0]},{"input":{"r":0.27897021593700067,"g":0.4775774650884147,"b":0.4121163626293918},"output":[0]},{"input":{"r":0.806320585889949,"g":0.06673707887783675,"b":0.5663898199388321},"output":[1]},{"input":{"r":0.6710322075365736,"g":0.9655176752507248,"b":0.15566768090810812},"output":[1]},{"input":{"r":0.4625557855785549,"g":0.49124177339905806,"b":0.8718492522453304},"output":[1]},{"input":{"r":0.9674037937420517,"g":0.5474315001068152,"b":0.2804886184274653},"output":[0]},{"input":{"r":0.3893520034596667,"g":0.5907649715903953,"b":0.6044023616470354},"output":[0]}]

net.train(data);

const colorEl = document.getElementById("colorElemnt");
const guessEl = document.getElementById("guess");
const buttons = document.getElementById("buttons").children;
const whiteBtn = buttons[0];
const blackBtn = buttons[1];
const printBtn = buttons[2];
let color;
setInterval(() => {
    setRandomColors();
}, 500);

whiteBtn.addEventListener("click", () => {
    chooseColor(0);
});
blackBtn.addEventListener("click", () => {
    chooseColor(1);
});
printBtn.addEventListener("click", () => {
    console.clear();
    print();
});

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);
