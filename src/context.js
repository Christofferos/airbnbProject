import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();
// Access to provider and consumer.
// <RoomContext.Provider value={"hello"}

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  // getData

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "airBnbRoom",
        order: "fields.price",
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);

      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice: maxPrice,
        maxSize: maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    // Locally
    /* let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      //
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize,
    }); */
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

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;

    // All the rooms
    let tempRooms = [...rooms];
    // Transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // Filter by price
    if (price >= 0) {
      tempRooms = tempRooms.filter((room) => room.price <= price);
    }
    // Filter by size
    tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);
    // FIlter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // FIlter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // Change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// -----
// [Higher order component] (Will run this within RoomContainer)
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>{(value) => <Component {...props} context={value} />}</RoomConsumer>;
  };
}
// -----

export { RoomProvider, RoomConsumer, RoomContext };
