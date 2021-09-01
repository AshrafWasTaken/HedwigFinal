export const invalidDest = (
  selectedLatitude,
  selectedLongitude,
  [coordinate1, coordinate2, cooridnate3, coordinate4]
) => {
  try {
    let pointInPolygon = require("point-in-polygon");
    Polygon = [
      [coordinate1.latitude, coordinate1.longitude],
      [coordinate2.latitude, coordinate2.longitude],
      [cooridnate3.latitude, cooridnate3.longitude],
      [coordinate4.latitude, coordinate4.longitude],
    ];
    return pointInPolygon(
      [selectedLatitude, selectedLongitude],
      Polygon,
      0,
      Polygon.length
    );
  } catch (error) {
    console.log(error);
  }
};
