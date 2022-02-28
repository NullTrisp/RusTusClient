export interface ITableRow {
  data: string[];
}
export default function TableRow(tableRow: ITableRow) {
  return (
    <tr>
      {tableRow.data.map((item, i) => {
        return <td key={i}>{item}</td>;
      })}
    </tr>
  );
}
