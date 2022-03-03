import React, {useEffect, useState} from "react";
import { data } from "../mocks/data";
import { handlers } from "../mocks/handlers";


function App() {

    useEffect(() => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [doggie, setDoggie] = useState(null)
    q
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setDoggie(data)
            setIsLoaded(true)
          });
      }, []);


        if (!isLoaded){ return <p>Loading...</p>;}
        return <img src={doggie} alt="A Random Dog"/>;

}


export default App;