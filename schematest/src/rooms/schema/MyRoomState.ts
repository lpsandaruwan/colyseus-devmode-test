import { Schema, MapSchema, type } from "@colyseus/schema";

export class MyRoomState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}

export class RoomMap extends Schema {
  @type({map: MyRoomState})
  players = new MapSchema<MyRoomState>();
}
