const dgram = require("dgram");
const drone = dgram.createSocket("udp4");
const PORT = "INSERTPORTHERE";
const HOST = "190.168.10.1";

drone.bind(PORT);
drone.on("message", (message) => {
  console.log(message);
});

const handleError = (error) => {
  if (error) {
    console.log(error);
  }
};
