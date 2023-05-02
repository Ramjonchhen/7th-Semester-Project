const canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth * 0.96;
canvas.height = window.innerHeight * 0.95;

const ctx = canvas.getContext("2d");
const axisDiff = 5;
const difference = 30;
const scaleIntervalBetweenAxis = parseFloat(0.2).toFixed(1);

// key board up & down keys controls the y intercept
let yIntercept = parseFloat(1.0).toFixed(1);

// key board left & right keys controls the y intercept
let slope = parseFloat(1.0).toFixed(1);

function drawAxisAndLabels() {
  // drawing the y axis
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  // plotting labels from the origin to top in axis
  let count = 0;

  for (let i = canvas.height / 2; i >= 0; i -= difference) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, i);
    ctx.lineTo(canvas.width / 2 + axisDiff, i);
    if (count !== 0) {
      const num = parseFloat(count * parseFloat(scaleIntervalBetweenAxis)).toFixed(1);
      ctx.fillText(`${num}`, canvas.width / 2 + axisDiff + 5, i);
    }
    ctx.stroke();
    count++;
  }

  count = 0;
  for (let i = canvas.height / 2; i <= canvas.height; i += difference) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, i);
    ctx.lineTo(canvas.width / 2 + axisDiff, i);
    if (count !== 0) {
      const num = parseFloat(count * parseFloat(scaleIntervalBetweenAxis)).toFixed(1);
      ctx.fillText(`-${num}`, canvas.width / 2 + axisDiff + 5, i);
    }
    ctx.stroke();
    count++;
  }

  // drawing the y axis
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  count = 0;
  for (let i = canvas.width / 2; i >= 0; i -= difference) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(i, canvas.height / 2);
    ctx.lineTo(i, canvas.height / 2 - axisDiff);
    if (count !== 0) {
      const num = parseFloat(count * parseFloat(scaleIntervalBetweenAxis)).toFixed(1);
      ctx.fillText(`-${num}`, i, canvas.height / 2 - axisDiff - 5);
    }
    ctx.stroke();
    count++;
  }

  count = 0;
  for (let i = canvas.width / 2; i <= canvas.width; i += difference) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(i, canvas.height / 2);
    ctx.lineTo(i, canvas.height / 2 - axisDiff);
    if (count !== 0) {
      const num = parseFloat(count * parseFloat(scaleIntervalBetweenAxis)).toFixed(1);
      ctx.fillText(`${num}`, i, canvas.height / 2 - axisDiff - 5);
    }
    ctx.stroke();
    count++;
  }
}

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowLeft":
      slope = parseFloat(slope) + parseFloat(parseFloat(scaleIntervalBetweenAxis));
      slope = parseFloat(slope).toFixed(1);
      slope = slope > 1.0 ? 1.0 : slope;
      break;

    case "ArrowRight":
      slope = parseFloat(slope) - parseFloat(scaleIntervalBetweenAxis);
      slope = parseFloat(slope).toFixed(1);
      slope = slope < -1.0 ? -1.0 : slope;
      break;

    case "ArrowUp":
      console.log("arrow up pressed");
      yIntercept = parseFloat(yIntercept) + parseFloat(scaleIntervalBetweenAxis);
      yIntercept = parseFloat(yIntercept).toFixed(1);
      yIntercept = yIntercept > 1.0 ? 1.0 : yIntercept;
      break;

    case "ArrowDown":
      yIntercept = parseFloat(yIntercept) - parseFloat(scaleIntervalBetweenAxis);
      yIntercept = parseFloat(yIntercept).toFixed(1);
      yIntercept = yIntercept < -1.0 ? -1.0 : yIntercept;
      break;
  }
};

function getPointsToPlot(x, y) {
  return {
    x: (x / parseFloat(scaleIntervalBetweenAxis)) * difference,
    y: -(y / parseFloat(scaleIntervalBetweenAxis)) * difference,
  };
}
animate();
function animate() {
  canvas.width = window.innerWidth * 0.96;
  //   console.log("value of the slope is: ", slope);
  drawAxisAndLabels();
  ctx.translate(canvas.width / 2, canvas.height / 2);

  ctx.strokeStyle = "purple";
  // drawing the line from yintercept to 1.0 value in the xaxis
  const pointA = getPointsToPlot(0, yIntercept);
  // console.log("point a is: ", pointA);

  ctx.moveTo(pointA.x, pointA.y);

  //   console.log("calc: ", parseFloat(yIntercept + slope * 10 * 0.1));
  const slopeMultiplied = parseFloat(slope * parseInt(1.0/parseFloat(scaleIntervalBetweenAxis))).toFixed(1);
  //   console.log("slope multiplied: ",slopeMultiplied);
  const slopeScaled = parseFloat(slopeMultiplied * parseFloat(scaleIntervalBetweenAxis)).toFixed(1);
  // console.log("y-intercept old: ", yIntercept);
  // console.log("slope scaled is: ",slopeScaled);
  const newYIntercept = parseFloat( parseFloat(yIntercept) + parseFloat(slopeScaled) ).toFixed(1);
  // console.log("new y intercept: ", newYIntercept);
  const pointB = getPointsToPlot(1.0, newYIntercept);
  // console.log("point b is: ", pointB);
  ctx.lineTo(pointB.x, pointB.y);
  ctx.stroke();

  requestAnimationFrame(animate);
}
