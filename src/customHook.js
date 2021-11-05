import { useState } from "react";

const useCoin = () =>{

    const [number , setNumber] = useState(0);

    const handleNumber = () =>{
        setNumber(number + 1);
    }


    return{

        number , 
        handleNumber

    }; 
}
export default useCoin;