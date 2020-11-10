import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
// Access to provider and consumer.
// <RoomContext.Provider value={"hello"}

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
  };
  // getData

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(itemsParam) {
    let tempItems = itemsParam.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug); // Finds one item. Filter would return an arr.
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
