let headQ = 42;
function distanceFromHqInBlocks(distance) {
  return Math.abs(headQ - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
  let theDistance = distanceTravelledInFeet(start, destination);

  if (theDistance < 400) {
    return 0;
  } else if (theDistance >= 400 && theDistance <= 2000) {
    return (theDistance - 400) * 0.02;
  } else if (theDistance > 2000 && theDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
