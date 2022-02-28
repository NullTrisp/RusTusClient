import TableHead from "./TableHead";
import TableRow from "./TableRow";

export interface ITableData {
  id: number;
  items: string[];
}

export interface ITable {
  tHeaders: string[];
  tBody: ITableData[];
}

export default function Table(table: ITable) {
  return (
    <table className="table">
      <thead>
        <tr>
          {table.tHeaders.map((h, i) => {
            return <TableHead key={i} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {table.tBody.map((item) => (
          <TableRow key={item.id} data={item.items} />
        ))}
      </tbody>
    </table>
  );
}
