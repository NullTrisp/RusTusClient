import Table from "./Table/Table";

export interface IStop {
  id: number;
  direction: string;
  name: string;
  latitude: number;
  longitude: number;
  number: number;
}

export default function Stop(stops: IStop[]) {
  return <Table headers={["ID", "Nombre"]}></Table>;
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
