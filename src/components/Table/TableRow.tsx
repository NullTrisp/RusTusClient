export default function TableRow(data: string[]) {
  return (
    <tr>
      {data.map((item, i) => {
        return <td key={i}>{item}</td>;
      })}
    </tr>
  );
}
