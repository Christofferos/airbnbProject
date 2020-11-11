import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import Loading from "./Loading";

import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

/* 
// Old version without higher order components.
import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomConsumer } from "../context"; // We need this here because we want to access context
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
} 
*/
