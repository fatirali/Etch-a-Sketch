// creating a div element using javascript.
// Copy this column container 16 times
for (let i = 0; i < 16; i++) {
  var cont = document.createElement("div");
  cont.id = "container";
  cont.classList = "main-grid";
  document.getElementById("body").appendChild(cont);
}
var colOfContainers = document.querySelectorAll(".main-grid");
// create 16 divs for each of the containers
colOfContainers.forEach(function (container) {
  for (let i = 0; i < 16; i++) {
    var div = document.createElement("div");
    div.id = "main";
    div.classList = "square-div";
    container.appendChild(div);
  }
});

// get divs to change color after hovering
var mouseTargets = document.querySelectorAll("div");
mouseTargets.forEach(function (target) {
  target.addEventListener("mouseover", () => {
    target.setAttribute("style", "background-color:lightBlue;");
  });
});

// Add a button to reconfigure Grid
var recon = document.createElement("button");
recon.textContent = "Reconfigure Grid";
document.getElementById("body").appendChild(recon);

// If button is clicked then a prompt shows up asking for the number squares per side. Max is 100.
// take number as input. E.g 64
// Change values of above container and box creators, i & j to input value
// width and height of the body container should remain the same.. Use
//               document.getElementById('div').setAttribute("style","width:500px");


var reconBtn = document.querySelector("button");
reconBtn.addEventListener("click", function () {

  var gridSize = Number(prompt("How many number of grid square would you like per side(maximum 100)"));
  console.log(typeof gridSize)
  if (gridSize <= 100) {
    mouseTargets.forEach(function (target) {
        target.remove();
    });
    for (let i = 0; i < gridSize; i++) {
        var cont = document.createElement("div");
        cont.id = "container";
        cont.classList = "main-grid";
        document.getElementById("body").appendChild(cont);
      };

      var colOfContainers = document.querySelectorAll(".main-grid");
      colOfContainers.forEach(function (container) {
    for (let i = 0; i < gridSize; i++) {
        var div = document.createElement("div");
        div.id = "main";
        div.classList = "square-div";
        container.appendChild(div);
    }
  });
};
});




// ------- REDUNDENT-----

// for each div-box element, create 15 more box in front of the row

// // Select all boxes
//   var rowOfBoxes = document.querySelectorAll(".square-div");
//   console.log(rowOfBoxes);

// // forEach box create 15 more boxes(with a container surrounding them)
//   rowOfBoxes.forEach(function (box) {
//     var divSubCont = document.createElement("div");
//     divSubCont.id = "sub-cont"
//     divSubCont.classList = "square-div-sub-cont";
//     box.appendChild(divSubCont);
//     for (let i = 0; i < 16; i++) {
//         var divSub = document.createElement("div");
//         divSub.id = "sub"
//         divSub.classList = "square-div-sub";
//         divSubCont.appendChild(divSub);
//     }
//   })

// create a new div element
// loop through to create 16 div elements in a column
