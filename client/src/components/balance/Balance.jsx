export const Balance = ({ amount, concept, type }) => {
  return (
    <li>
        <p>{concept}</p>
      <p>{amount}</p>
      {type==1?<p>Entry</p>:<p>Expenses</p>}
    </li>
  );
};
