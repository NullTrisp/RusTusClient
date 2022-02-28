import TableHead from "./TableHead";
import TableRow from "./TableRow";

export interface ITableData {
  id: Number;
  items: string[];
}

export default function Table<T>(theadData: string[], tbodyData: ITableData[]) {
  return (
    <table>
      <thead>
        <tr>
          {theadData.map((h, i) => {
            return <TableHead key={i} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => (
          <TableRow data={item.items} />
        ))}
      </tbody>
    </table>
  );
}
