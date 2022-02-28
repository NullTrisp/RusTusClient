import axios from "axios";
import { useEffect, useState } from "react";
import Bus, { IBus } from "../components/Bus";
import constants from "../constants";
export default function Home() {
  const [buses, setBuses] = useState<IBus[]>();

  useEffect(() => {
    axios({
      method: "get",
      url: constants.EXTERNAL_URL + "buses",
      headers: {},
    })
      .then(({ data }) => {
        setBuses(data);
      })
      .catch((err) => err instanceof Error && console.log(err.message));
  }, []);

  if (buses) {
    return (
      <div className="stops-grid">
        {buses.map((bus, i) => (
          <Bus
            key={i}
            id={bus.id}
            number={bus.number}
            destinations={bus.destinations}
          />
        ))}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
