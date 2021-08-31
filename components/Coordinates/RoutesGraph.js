import { NavigationCoordinates } from "./NavigationLines";

const RoutesGraph = new Map();

const Coord1RoutingTable = new Map();
Coord1RoutingTable.set("coord2", NavigationCoordinates.coord2);
Coord1RoutingTable.set("coord3", NavigationCoordinates.coord2);
Coord1RoutingTable.set("coord4", NavigationCoordinates.coord4);
Coord1RoutingTable.set("coord5", NavigationCoordinates.coord6);
Coord1RoutingTable.set("coord6", NavigationCoordinates.coord6);
Coord1RoutingTable.set("coord7", NavigationCoordinates.coord7);
Coord1RoutingTable.set("coord8", NavigationCoordinates.coord6);

const Coord2RoutingTable = new Map();
Coord2RoutingTable.set("coord1", NavigationCoordinates.coord1);
Coord2RoutingTable.set("coord3", NavigationCoordinates.coord3);
Coord2RoutingTable.set("coord4", NavigationCoordinates.coord2);
Coord2RoutingTable.set("coord5", NavigationCoordinates.coord6);
Coord2RoutingTable.set("coord6", NavigationCoordinates.coord6);
Coord2RoutingTable.set("coord7", NavigationCoordinates.coord6);
Coord2RoutingTable.set("coord8", NavigationCoordinates.coord6);

const Coord3RoutingTable = new Map();
Coord3RoutingTable.set("coord1", NavigationCoordinates.coord2);
Coord3RoutingTable.set("coord2", NavigationCoordinates.coord2);
Coord3RoutingTable.set("coord4", NavigationCoordinates.coord8);
Coord3RoutingTable.set("coord5", NavigationCoordinates.coord8);
Coord3RoutingTable.set("coord6", NavigationCoordinates.coord7);
Coord3RoutingTable.set("coord7", NavigationCoordinates.coord7);
Coord3RoutingTable.set("coord8", NavigationCoordinates.coord8);

const Coord4RoutingTable = new Map();
Coord4RoutingTable.set("coord1", NavigationCoordinates.coord1);
Coord4RoutingTable.set("coord2", NavigationCoordinates.coord2);
Coord4RoutingTable.set("coord3", NavigationCoordinates.coord8);
Coord4RoutingTable.set("coord5", NavigationCoordinates.coord5);
Coord4RoutingTable.set("coord6", NavigationCoordinates.coord6);
Coord4RoutingTable.set("coord7", NavigationCoordinates.coord6);
Coord4RoutingTable.set("coord8", NavigationCoordinates.coord8);

const Coord5RoutingTable = new Map();
Coord5RoutingTable.set("coord1", NavigationCoordinates.coord6);
Coord5RoutingTable.set("coord2", NavigationCoordinates.coord6);
Coord5RoutingTable.set("coord3", NavigationCoordinates.coord8);
Coord5RoutingTable.set("coord4", NavigationCoordinates.coord4);
Coord5RoutingTable.set("coord6", NavigationCoordinates.coord6);
Coord5RoutingTable.set("coord7", NavigationCoordinates.coord8);
Coord5RoutingTable.set("coord8", NavigationCoordinates.coord8);

const Coord6RoutingTable = new Map();
Coord6RoutingTable.set("coord1", NavigationCoordinates.coord1);
Coord6RoutingTable.set("coord2", NavigationCoordinates.coord2);
Coord6RoutingTable.set("coord3", NavigationCoordinates.coord7);
Coord6RoutingTable.set("coord4", NavigationCoordinates.coord4);
Coord6RoutingTable.set("coord5", NavigationCoordinates.coord5);
Coord6RoutingTable.set("coord7", NavigationCoordinates.coord7);
Coord6RoutingTable.set("coord8", NavigationCoordinates.coord7);

const Coord7RoutingTable = new Map();
Coord7RoutingTable.set("coord1", NavigationCoordinates.coord6);
Coord7RoutingTable.set("coord2", NavigationCoordinates.coord6);
Coord7RoutingTable.set("coord3", NavigationCoordinates.coord3);
Coord7RoutingTable.set("coord4", NavigationCoordinates.coord4);
Coord7RoutingTable.set("coord5", NavigationCoordinates.coord8);
Coord7RoutingTable.set("coord6", NavigationCoordinates.coord6);
Coord7RoutingTable.set("coord8", NavigationCoordinates.coord8);

const Coord8RoutingTable = new Map();
Coord8RoutingTable.set("coord1", NavigationCoordinates.coord7);
Coord8RoutingTable.set("coord2", NavigationCoordinates.coord7);
Coord8RoutingTable.set("coord3", NavigationCoordinates.coord3);
Coord8RoutingTable.set("coord4", NavigationCoordinates.coord4);
Coord8RoutingTable.set("coord5", NavigationCoordinates.coord5);
Coord8RoutingTable.set("coord6", NavigationCoordinates.coord7);
Coord8RoutingTable.set("coord7", NavigationCoordinates.coord7);

RoutesGraph.set(NavigationCoordinates.coord1, Coord1RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord2, Coord2RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord3, Coord3RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord4, Coord4RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord5, Coord5RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord6, Coord6RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord7, Coord7RoutingTable);
RoutesGraph.set(NavigationCoordinates.coord8, Coord8RoutingTable);

export default RoutesGraph;
