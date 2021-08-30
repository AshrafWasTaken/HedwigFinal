import { getDistance } from "geolib";

export const getPathDistance = (pathArray) => {
  let distance = 0;
  for (let i = 0; i < pathArray.length - 1; i++) {
    distance = distance + getDistance(pathArray[i], pathArray[i + 1]);
  }
  return distance * 2;
};
