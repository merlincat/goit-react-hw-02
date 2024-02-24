import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.mainTable}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadCol}>Type</th>
          <th className={css.tableHeadCol}>Amount</th>
          <th className={css.tableHeadCol}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tBodyCol}>
            <td className={css.tableHeadCol}>{item.type}</td>
            <td className={css.tableHeadCol}>{item.amount}</td>
            <td className={css.tableHeadCol}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
