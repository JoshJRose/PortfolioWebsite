import { useState, useEffect } from "react";
import HomeSlider from "./components/HomeSlider";
import "./styles.css";
import useFetch from "./useFetch";

const Home = () => {

    const {data: folders, isPending, error} = useFetch('http://localhost:8000/folders')
    console.log(folders);

    return ( 
        <div className="flex items-center justify-center w-screen h-screen p-20 font-light bg-dark text-ligray">
            <div className="w-2/5 h-1/2">
                welcome
            </div>
            { error && <div> {error}</div>}
            {isPending && <div> loading... </div>}
            {folders && <HomeSlider folders={folders} />}
        </div>
     );


}
 
export default Home;