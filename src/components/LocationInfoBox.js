const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Details</h2>
      <ul>
        <li>
          <strong>{info.title}</strong>
          <br />
          <br />
          Monthly Price: <strong>{info.price}</strong>
          <br />
          <br />
          Number of bedrooms: <strong>{info.bedrooms}</strong>
          <br />
          <br />
          Contact: <strong>{info.number}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
