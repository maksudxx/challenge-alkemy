export const Balance = ({ amount, concept, type }) => {
  return (
    <li>
        <p>{concept}</p>
      {type == 1? <p>${amount}</p>: <p>$-{amount}</p>}
    </li>
  );
};
