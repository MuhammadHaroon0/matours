import { useLocation } from "react-router-dom";
import Description from "./Description";
import Navbar from "./Navbar";


const Header = (props) => {
  const { pathname } =useLocation();

  return (
    <div>
      <Navbar destinationsData={props.destinationsData}/>
      { pathname==="/" && <Description />}
    </div>
  );
};




export default Header;
