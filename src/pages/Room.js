/* Class-based component */
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class Room extends Component {
  constructor(props) {
    super(props);
    // React dom router provices this.props
    this.state = {
      slug: this.props.match.params.room,
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
    const [mainImg, ...defaultImg] = images; // Rest påeratpr

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section class="single-room">
          <div class="single-room-images">
            {defaultImg.map((item, id) => {
              return <img key={id} src={item} alt={name}></img>;
            })}
          </div>
          <div class="single-room-info">
            <article class="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article class="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} dm²</h6>
              <h6>Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
              <h6>Pets allowed: {pets ? "yes" : "no"}</h6>
            </article>
          </div>
        </section>

        <section class="room-extras">
          <h6>extras</h6>
          <ul class="extras">
            {extras.map((item, id) => {
              return <li key={id}>- {item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
