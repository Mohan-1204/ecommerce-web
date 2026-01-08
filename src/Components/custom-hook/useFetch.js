import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  let [product, setProduct] = useState([]);
  let [error, setError] = useState([]);
  let [isLoad, setisLoad] = useState(true);

  
  useEffect(() => {
      let fecthApi = async () => {
        
          
          try {
            
              let response = await axios.get(url)
              console.log(response.data);
              
              
            // let respo = await fetch(url)
            
            // if (respo.ok) {
            //     let data = await respo.json()
                setProduct(response.data)
            // }
            // else {
            //     throw new Error("Data Not Found");
                
            // }

        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setisLoad(false);
        }
    }
    fecthApi()
  }, []);
    
    return { product, error, isLoad, setProduct }
    
}

export default useFetch