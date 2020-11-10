import React, { Component } from "react";
import { FaAward, FaHiking, FaPaw, FaCarSide } from "react-icons/fa";
/* accessible-icon, award, car/car-side */
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaAward />,
        title: "high reviews",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaPaw />,
        title: "Animal friendly",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCarSide />,
        title: "accessible houses",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaHiking />,
        title: "hiking encouraged",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div class="services-center">
          {this.state.services.map((item, id) => {
            return (
              <article key={id} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
