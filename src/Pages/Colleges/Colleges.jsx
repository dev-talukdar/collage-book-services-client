import useCollage from "../../hooks/useCollage";

 

const Colleges = () => {
    const college = useCollage()
    return (
        <div>
             <h2>{college}</h2>
        </div>
    );
};

export default Colleges;