







function createGrid(dimensions) {

    // loop creates an initial div count of 256 to create a 16x16 board upon page load
    // It initially creates a row in the outer loop, makes 16 div containers in the inner loop,
    // then appends them all to the row at the end of the inner loop

    const mainDivContainer = document.getElementById("div-container");

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