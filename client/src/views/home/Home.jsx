import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Balance } from "../../components/balance/Balance";
import styles from "./Home.module.css";
const operations = require("../../utils/operations");
export default function Home() {
  let [data, setData] = useState([]);
  useEffect(() => {
    operations.getData(setData);
  }, []);

  const total = operations.sumBalance({ data });
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Last 10 Movements</h1>
      <span className={styles.balance}>
        <p>Balance:</p>
        <p>${total}</p>
      </span>
      <div className={styles.containerCards}>
        <ul className={styles.ul}>
          {data.length > 0 ? (
            data.map((d, index) => (
              <Balance
                key={index}
                amount={d.op_amount}
                concept={d.op_concept}
                type={d.cat_id}
              />
            ))
          ) : (
            <p>Empty</p>
          )}
        </ul>
      </div>
    </div>
  );
}
