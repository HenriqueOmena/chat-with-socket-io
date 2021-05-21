import { constants } from "../../_shared/constants";
import SocketBuilder from "../../_shared/socketBuilder";

const socket = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNameSpaces.room,
});

socket
  .setOnUserConnected((user) => console.log("user connected", user))
  .setOnUserDisconnected((user) => console.log("user disconected", use))
  .build();

const room = {
  id: Date.now(),
  topic: "Js Expert",
};

const user = {
  img: "https://raw.githubusercontent.com/halwax/halwax.github.io/master/images/avatar.png",
  username: "Henrique Omena",
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
