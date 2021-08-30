import coordArr, { coordPoints } from "../Coordinates/UnavailableAreas";
import {
  NavigationCoordinates,
  NavigationCoordinatesInArray,
} from "../Coordinates/NavigationLines";
import { getDistance, findNearest } from "geolib";
import RoutesGraph from "../Coordinates/RoutesGraph";
import { AvailableAreas } from "../Coordinates/Polygons";

export const showCasePath = () => {};
let pathArray = [];
let pointInPolygon = require("point-in-polygon");
export const calculatePath = (currentLocation, selectedDestination) => {
  pathArray = [];
  pathArray.push(currentLocation);
  if (
    checkIfDestinationIsShortest(currentLocation, selectedDestination) == true
  ) {
    pathArray.push(selectedDestination);
    return pathArray;
  }
  let currentCoord;
  let closestToDestination;
  let closestToDestinationKey;
  Object.values(NavigationCoordinates).forEach((coord) => {
    if (
      findNearest(currentLocation, NavigationCoordinatesInArray).latitude ==
      coord.latitude
    ) {
      currentCoord = coord;
      return;
    }
  });
  for (const [key, value] of Object.entries(NavigationCoordinates)) {
    if (
      findNearest(selectedDestination, NavigationCoordinatesInArray).latitude ==
      value.latitude
    ) {
      closestToDestination = value;
      closestToDestinationKey = key;
      break;
    }
  }
  pathArray.push(currentCoord);
  while (currentCoord != closestToDestination) {
    let currentCoordRoutingGraph = RoutesGraph.get(currentCoord);
    let nextCoord = currentCoordRoutingGraph.get(closestToDestinationKey);
    currentCoord = nextCoord;
    pathArray.push(currentCoord);
  }
  pathArray.push(selectedDestination);
  return pathArray;
};

const checkIfDestinationIsShortest = (currentLocation, selectedDestination) => {
  let mainDistance = getDistance(currentLocation, selectedDestination);
  let flag = true;
  Object.values(NavigationCoordinates).forEach((coord) => {
    if (mainDistance > getDistance(coord, currentLocation)) {
      flag = false;
    }
  });
  if (!flag) return false;
  return true;
};
