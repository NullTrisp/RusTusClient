interface IDestination {
  a: Array<string>;
  b: Array<string>;
}
export interface IBus {
  number: Number;
  destinations: IDestination;
  id: Number;
}

export default function Bus(bus: IBus) {
  return (
    <div className="card">
      <h3>Numero de Bus: {bus.number}</h3>
      <h4>Destinos:</h4>
      {RenderDestinations(bus.destinations)}
    </div>
  );
}

function RenderDestinations(destinations: IDestination) {
  return (
    <>
      {destinations.b && <h5>Ida: </h5>}
      {destinations.a.map(
        (destination, i) => destination && <h6 key={i}>{destination}</h6>
      )}
      {destinations.b && <h5>Regreso: </h5>}
      {destinations.b &&
        destinations.b.map(
          (destination, i) => destination && <h6 key={i}>{destination}</h6>
        )}
    </>
  );
}
