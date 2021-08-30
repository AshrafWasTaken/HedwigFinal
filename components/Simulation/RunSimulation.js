import React from "react";

export const RunSimulation = (arrayPath) => {
  let counter = 0;
  let index = 0;
  console.log(arrayPath.length + "<- this is the length of the array");
  const timer = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter % 10 == 0) {
      console.log(
        "The drone arrived at checkpoint - " + arrayPath[index].latitude
      );
      index++;
      console.log("at index [" + index + "]");
    }
    if (index === arrayPath.length) {
      console.log("Reached destination!");
      clearInterval(timer);
    }
  }, 500);
};
