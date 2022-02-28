export interface ITableHead {
  item: string;
}

export default function TableHead(tableHead: ITableHead) {
  return <td title={tableHead.item}>{tableHead.item}</td>;
}
