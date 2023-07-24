import { useEffect } from "react";
import { useState } from "react";

 

const useCollage = () => {
    const [college, setCollege] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('http://localhost:5000/colleges')
        .then(res => res.json())
        .then(data => {
            setCollege(data);
            setLoading(false)
        })
    }, [])
    return  [college, loading]
};

export default useCollage;