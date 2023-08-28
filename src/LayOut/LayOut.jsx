import { Outlet } from "react-router-dom";
import Footer from "../Pages/SheardPage/Footer";
import NavBar from "../Pages/SheardPage/navbar/NavBar";


const LayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default LayOut;