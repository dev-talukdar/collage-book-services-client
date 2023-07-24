import { useState } from "react";
import CollegeCard from "./CollegeCard";
import { useEffect } from "react";

 

const Colleges = () => {
     const [collage, setCollage] = useState([]);
     const [showAllCollage, setShowAllCollage] = useState(false);

     useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCollage(data))
     }, [])

     const displayCollage = showAllCollage ? collage : collage.slice (0,6)

     const handleViewMore = () => {
        setShowAllCollage(true);

     }

    return (
        <div>
            <CollegeCard></CollegeCard>
        </div>
    );
};

export default Colleges;