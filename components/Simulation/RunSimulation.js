import React from "react";

export const RunSimulation = (arrayPath) => {
  let counter = 0;
  let index = 0;
  const timer = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter % 10 == 0) {
      console.log(
        "The drone arrived at checkpoint - " +
          arrayPath[index].latitude +
          " - " +
          arrayPath[index].longitude
      );
      index++;
      console.log("at index [" + index + "]");
    }
    if (index === arrayPath.length) {
      console.log("Reached destination!");
      console.log("Package collected, now returning back.");
      clearInterval(timer);
    }
  }, 500);
};

const returnTheDrone = (arrayPath) => {
  let counter = 0;
  let index = 0;
  const secondTimer = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter % 10 == 0) {
      console.log("Drone arrived at checkpoint - " + arrayPath[index]);
      index++;
      console.log("at index [" + index + "]");
    }
    if (index === arrayPath.length) {
      console.log("Reached source location safely!");
      clearInterval(secondTimer);
    }
  }, 1000);
};
