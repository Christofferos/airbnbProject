import React from "react";
/*
import { useState, useEffect } from "react"; */
import Map from "./../components/Map";

function Houses() {
  /* const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []); */

  return (
    <React.Fragment>
      <Map />
    </React.Fragment>
  );
}

export default Houses;
