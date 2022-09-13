
import { useState, useEffect } from "react";

function useQuery(url) {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/blogs")
        .then((res) => res.json())
        .then((data) => setData(data))
      },[url])

      return{
        data
      }
}

export default useQuery;