import { Room, Client } from "/home/lahirup/Desktop/Colyseus/colyseus/packages/core/build";
import {MyRoomState, RoomMap} from "./schema/MyRoomState";

export class MyRoom extends Room<RoomMap> {

  onCreate (options: any) {
    this.setState(new RoomMap());

    this.onMessage("up", (client, message) => {
      const p = this.state.players.get(client.sessionId);
      p.mySynchronizedProperty = message["msg"];
    });
  }

  onJoin (client: Client, options: any) {
    this.state.players.set(client.sessionId, new MyRoomState());
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
