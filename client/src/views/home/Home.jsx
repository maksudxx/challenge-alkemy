import Navbar from "../../components/navbar/Navbar";
import {useState, useEffect} from "react"
import { Balance } from "../../components/balance/Balance";
const operations = require('../../utils/operations')
export default function Home(){
   let [data, setData] = useState([])
   useEffect(() => {
       operations.getData(setData)
   }, []);
    return(
        <div>
            <Navbar/>
            <Balance data={data}/>
        </div>
    )
}