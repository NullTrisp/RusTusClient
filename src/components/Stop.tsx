import Table from "./Table/Table";

export interface IStop {
  id: number;
  direction: string;
  name: string;
  latitude: number;
  longitude: number;
  number: number;
}
export interface IStops {
  stops: IStop[];
}

export default function Stop(data: IStops) {
  return (
    <Table
      tHeaders={["ID", "Dirección", "Nombre", "Latitud", "Logitud", "Numero"]}
      tBody={data.stops
        .map((stop) => {
          return {
            id: stop.id,
            items: [
              stop.id.toString(),
              stop.direction,
              stop.name,
              stop.latitude.toString(),
              stop.longitude.toString(),
              stop.number.toString(),
            ],
          };
        })
        .flatMap((el) => el)}
    />
  );
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Nombre</th>
  //         <th>Dirección</th>
  //         <th>Numero</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {objToArray<IStop>(stops).map((stop, i) => (
  //         <tr key={i}>
  //           <td>{stop.id}</td>
  //           <td>{stop.name}</td>
  //           <td>{stop.direction}</td>
  //           <td>{stop.number}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
}

function objToArray<T>(obj: T[]): T[] {
  return Object.keys(obj).map((_, index) => obj[index]);
}
