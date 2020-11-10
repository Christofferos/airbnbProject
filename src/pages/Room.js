/* Class-based component */
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class Room extends Component {
  constructor(props) {
    super(props);
    // React dom router provices this.props
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // If room is undefined
    if (!room) {
      return (
        <div class="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}></Banner>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </Hero>
    );
  }
}
