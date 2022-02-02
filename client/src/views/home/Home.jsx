import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Balance } from "../../components/balance/Balance";
const operations = require("../../utils/operations");
export default function Home() {
  let [data, setData] = useState([]);
  useEffect(() => {
    operations.getData(setData);
  }, []);

  const total = operations.sumBalance({ data });
  return (
    <div>
      <Navbar />
      <div>
        <h1>last movements</h1>
        <ul>
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
        <h2>Balance </h2>
        <p>${total}</p>
      </div>
    </div>
  );
}
