// Get the grid element
const grid = document.getElementById("grid");

// get the grid size display element
const gridSizeDisplay = document.getElementById("grid-size-display");


// default grid size
let gridSize = 16;
// Set the initial grid size display
gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;

// Set the default grid columns and rows
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

// Calculate the total number of boxes to create
const totalGridItems = gridSize * gridSize;

// Create and append boxes to the grid
for (let i = 0; i < totalGridItems; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  grid.appendChild(box);


// Add event listener to each box to change color 
  
  // if clicked color will change
  box.addEventListener("mousedown", () => {
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  });
  
  // if clicked and hovered, it will change color
  box.addEventListener("mouseover", (event) => {
    // Check if mouse button is pressed
    if (event.buttons === 1) {
      box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } else {
      // do nothing
    }
  });
}

// Get the grid slider element
const gridSlider = document.getElementById("grid-slider");


// Add an event listener to the slider to update the grid size
gridSlider.addEventListener("input", () => {
  // Get the value of the slider
  gridSize = gridSlider.value;

  // Set the grid columns and rows based on the slider value
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Remove any existing boxes from the grid
  grid.innerHTML = "";

  // Create and append new boxes to the grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-item");
    grid.appendChild(box);
    
 // Add event listener to each box to change color 
  
  // if clicked color will change
  box.addEventListener("mousedown", () => {
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  });
  
  // if clicked and hovered, it will change color
  box.addEventListener("mouseover", (event) => {
    // Check if mouse button is pressed
    if (event.buttons === 1) {
      box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } else {
      // do nothing
    }
  });

  }
    // Update the grid size display
    gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
});