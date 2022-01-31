import Navbar from "../../components/navbar/Navbar";

const operations = require('../../utils/operations')
export default function Home(){
   let a = operations.getData()
   console.log(a)
    return(
        <div>
            <Navbar/>
        </div>
    )
}