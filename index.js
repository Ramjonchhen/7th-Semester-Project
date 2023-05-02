// define an array of project names
let projectNames = [
  "Stage 1: Moving The Car",
  "Stage 2: Drawing The Road",
  "Stage 3: Adding Sensor to the Car",
  "Stage 4: Segment Intersection ",
  "Stage 5: Implementing Collision Detection",
  "Stage 6: Adding Traffic to the Road",
  "Stage 7: Coding The Neural Network",
  "Stage 8: Visualizing the Neural Network",
  "Stage 9: Optimizing the Neural Network",
  "Stage 10: Fine Tuning the Environment"
];

// function to display the project names as links
function showProjectLinks() {
  let output = "";
  for (let i = 0; i < projectNames.length; i++) {
    output +=
      `<li><a href='./stage${i + 1}/index.html'>` +
      projectNames[i] +
      "</a></li>";
  }

  document.querySelector("#project-links").innerHTML = output;
}

// call the showProjectLinks function when the page loads
window.onload = function () {
  showProjectLinks();
};
