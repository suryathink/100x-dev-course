/*
https://www.npmjs.com/package/ws
*/

// const subscriptions: {
//   [key: string]: {
//     ws: WebSocket;
//     rooms: string[];
//   };
// } = {
// "user1":{
//     ws:WebSocket,
//     rooms:[room1]
// }
// "user2":{
//     ws:WebSocket,
//     rooms:[room2]
// }
//   ["user1","user2"]
// };

import { WebSocketServer, WebSocket } from "ws";
import { createClient } from "redis";

// this redis client can be used either to publish or to subscribe event, but it can't do both the things together,
// that's why we create 2 clients, one to publish and another to subscribe

const publishClient = createClient();
publishClient.connect();

const subscribeClient = createClient();
subscribeClient.connect();

const PORT = 8081;

const wss = new WebSocketServer({ port: PORT });

const subscriptions: {
  [key: string]: {
    ws: WebSocket;
    rooms: string[];
  };
} = {};

// setInterval(() => {
//   console.log(subscriptions);
// }, 5000);

wss.on("connection", function connection(userSocket) {
  console.log("PORT ", PORT);
  const id = randomId();
  subscriptions[id] = {
    ws: userSocket,
    rooms: [],
  };

  /* 
  also write a logic when wss.close happens,
    
  then check user was part of which all rooms and then unsubscribe that from those rooms

  */

  userSocket.on("message", function message(data) {
    const parsedMessage = JSON.parse(data as unknown as string);
    if (parsedMessage.type === "SUBSCRIBE") {
      subscriptions[id].rooms.push(parsedMessage.room);

      // if one user has subscribed to this room
      if (oneUserSubscribedToThisRoom(parsedMessage.room)) {
        console.log("subscribing on the pub sub to room " + parsedMessage.room);
        subscribeClient.subscribe(parsedMessage.room, (message) => {
          const parsedMessage = JSON.parse(message);

          Object.keys(subscriptions).forEach((userId) => {
            const { ws, rooms } = subscriptions[userId];

            if (rooms.includes(parsedMessage.roomId)) {
              ws.send(parsedMessage.message);
            }
          });
        });
      }
    }

    if (parsedMessage.type === "UNSUBSCRIBE") {
      subscriptions[id].rooms = subscriptions[id].rooms.filter(
        (x) => x !== parsedMessage.room
      );

      if (lastPersonLeftThisRoom(parsedMessage.room)) {
        console.log(
          "unsubscribing on the pub sub from room " + parsedMessage.room
        );

        subscribeClient.unsubscribe(parsedMessage.room);
      }
    }

    if (parsedMessage.type === "sendMessage") {
      const message = parsedMessage.message;
      const roomId = parsedMessage.roomId;

      // Object.keys(subscriptions).forEach((userId) => {
      //   const { ws, rooms } = subscriptions[userId];
      //   if (rooms.includes(roomId)) {
      //     ws.send(message);
      //   }
      // });

      publishClient.publish(
        roomId,
        JSON.stringify({
          type: "sendMessage",
          roomId: roomId,
          message,
        })
      );
    }
  });
});

function randomId() {
  return Math.random();
}

// you can optimise this code, this code has been optimised in the backpack ws code
function oneUserSubscribedToThisRoom(roomId: string) {
  let totalInterestedPeople = 0;
  Object.keys(subscriptions).map((userId) => {
    if (subscriptions[userId].rooms.includes(roomId)) {
      totalInterestedPeople++;
    }
  });

  if (totalInterestedPeople >= 1) return true;
}

function lastPersonLeftThisRoom(roomId: string) {
  let totalInterestedPeople = 0;
  Object.keys(subscriptions).map((userId) => {
    if (subscriptions[userId].rooms.includes(roomId)) {
      totalInterestedPeople++;
    }
  });

  if (totalInterestedPeople == 0) {
    return true;
  } else {
    return false;
  }
}
