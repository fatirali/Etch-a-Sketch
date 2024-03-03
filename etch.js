// creating a div element using javascript. 
// Copy this column container 16 times
for (let i = 0; i < 16; i++) {
    var cont = document.createElement("div");
    cont.id = "container"
    cont.classList = "main-grid";
    document.getElementById("body").appendChild(cont);
  };
  var colOfContainers = document.querySelectorAll(".main-grid");


  colOfContainers.forEach(function (container) {
    for (let i = 0; i < 16; i++) {
        var div = document.createElement("div");
        div.id = "main"
        div.classList = "square-div";
        container.appendChild(div);
      };
})


// Create a column of 16 div box elements




// ------- May be redundant -----

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
