import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Stop, { IStop } from "../components/Stop";
import constants from "../constants";

export default function Stops() {
  const [stops, setStops] = useState<IStop[]>();

  useEffect(() => {
    axios({
      method: "get",
      url: constants.EXTERNAL_URL + "stops?from=0&to=2000",
      headers: {},
    })
      .then(({ data }) => {
        setStops(data);
      })
      .catch((err) => err instanceof Error && console.log(err.message));
  }, []);

  if (stops && stops.length > 0) {
    return <Stop {...stops} />;
  } else {
    return <h1>loading...</h1>;
  }
}
