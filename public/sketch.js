let grid;
//let next;
let cols;
let rows;
let res = 5;

function make2DArray(col, row) {
  let arr = new Array(col);
  for (let i=0; i < cols; i++){
    arr[i] = new Array(row);
  }
  return arr
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  
  cols = floor(width/res);
  rows = floor(height/res);
  
  grid = make2DArray(cols,rows);
  //next = make2DArray(cols, rows);
  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      grid[i][j] = floor(random(2));   
    }
  }
}

function draw() {
  background(0);
  
  // Drawing the grid
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      if (grid[i][j] == 0) {
        fill(255);
        noStroke();
        rect(i*res, j*res, res, res);
      }
      
    }
  }
  
  let next = make2DArray(cols,rows);
  //calculating next
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      state = grid[i][j]
      neighbour = calculateNeighbours(grid, i, j);
      
     if (state == 0 && neighbour == 3) {
      next[i][j] = 1;
     }
     else if (state == 1 && (neighbour < 2 || neighbour > 3)) {
      next[i][j] = 0;
     }
     else {
      next[i][j] = state;
     }
    }
  }
  
  grid = next;
}

function calculateNeighbours(grid, x, y) {
  let sum = 0;
  for (let i=-1; i<=1; i++) {
    for (let j=-1; j<=1; j++) {
      sum += grid[(x+i+cols) % cols][(y+j+rows) % rows];
    }
  }
  sum = sum - grid[x][y];
  return sum;
}





