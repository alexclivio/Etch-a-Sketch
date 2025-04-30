console.log("Success")

const gridButton = document.getElementById("grid-button")
const gridContainer = document.getElementById("grid-container");

gridButton.addEventListener("click", (e) => {
  const allDivs = document.querySelectorAll(".grid-square");

  allDivs.forEach(div => {
    div.remove();
  });

  let gridResponse = prompt("Please enter grid size.")

  generateGrid(gridResponse)
})

const generateGrid = (num) => {
  const gridNum = num * num
  const perRow = Math.sqrt(gridNum);
  console.log(perRow)
  const itemWidth = 100 / perRow;
  for (let i = 0; i < gridNum; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = `${itemWidth}%`;
    gridSquare.classList.add("grid-square");
    gridContainer.append(gridSquare);
  }

  divHover()
}

const divHover = () => {
  const innerDivs = document.querySelectorAll(".grid-square");

  console.log(innerDivs)
  
  innerDivs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      e.target.classList.add("hover-in");
    });
  });
  
  innerDivs.forEach((div) => {
    div.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("hover-in")
    })
  })
}

