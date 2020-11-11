import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div class="empty-search">
        <h3>Unfortunately no rooms matched your filter</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div class="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item}></Room>;
        })}
      </div>
    </section>
  );
}
