import React from "react";
import Butten from "./butten";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2021_BMW_M4_Competition_Automatic_3.0_Front.jpg/330px-2021_BMW_M4_Competition_Automatic_3.0_Front.jpg"
          alt="2021 BMW M4 front view"
          className=""
        />
      </div>
      <div className="card-text">
        <h1>B.M.W M4</h1>
        <p>
          As part of the renumbering that splits the coupé and convertible
          variants of the 3 Series into the 4 Series, the M4 replaced those
          variants of the BMW M3. Upgrades over the standard BMW 4 Series
          include an upgraded engine, suspension, exhaust system, brakes and
          weight reduction measures including increased use of carbon fiber,
          such as on the roof of the car, and the door cards.[1]
        </p>
        <button>reed more</button>
      </div>
    </div>
  );
};

export default Card;
