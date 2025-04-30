console.log("Success")

const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 256; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridContainer.append(gridSquare);
}

const innerDivs = document.querySelectorAll(".grid-square");

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
