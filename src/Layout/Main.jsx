import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import Footer from "../Pages/Shared/Footer/Footer";

 

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;