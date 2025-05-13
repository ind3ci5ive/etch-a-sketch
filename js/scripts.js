

var button = document.getElementById("grid-button");
button.addEventListener("click", changeGridSize);

function changeGridSize() {

    var userInput = prompt("Please enter single-digit grid size (i.e. 5 will create a 5x5 grid).");

    if (userInput > 100) {

        alert("Too big; Please keep grid size no larger than 100.");
    }

    else if (userInput <= 0) {

        alert("You can't make a grid of nothing Einstein.");
    }

    else if (userInput == NaN) {

        alert("Make sure you are inputting a number!")
    }

    else if (userInput % 1 != 0) {

        alert("Only whole numbers please!");
    }

    else {

        createGrid(userInput);
    }
}


function createGrid(dimensions) {

    // loop creates an initial div count of 256 to create a 16x16 board upon page load
    // It initially creates a row in the outer loop, makes 16 div containers in the inner loop,
    // then appends them all to the row at the end of the inner loop

    const mainDivContainer = document.getElementById("div-container");
    mainDivContainer.innerHTML = "";

    for (var i = 0; i < dimensions; i++) {

        var row = document.createElement("div");
        row.id = "row";

        for (var j = 0; j < dimensions; j++) {


            var childDiv = document.createElement("div");
            childDiv.style.border = "solid";
            childDiv.style.width = "10px";
            childDiv.style.height = "10px";
            childDiv.id = "childDiv"
            row.appendChild(childDiv);
            console.log("div create success")
        }

        mainDivContainer.appendChild(row);
    }

}


createGrid(16);