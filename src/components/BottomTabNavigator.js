import { NavLink } from "react-router-dom";
import Home from "../assets/images/HomePage.png"
import Check from "../assets/images/Check.png"
import Add from "../assets/images/Add.png"
import Notification from "../assets/images/Notification.png"
import Profile from "../assets/images/Profile.png"

const BottomTabNavigator = (props) => {
    return (
        <div className="bottom-tab">
            <div className='bottom-tab_container'>
                <ul className="bottom-tab_list flex flex-center">
                    <li className="bottom-tab_list-item">
                        <NavLink to="/home">
                            <img src={Home} alt="" />
                        </NavLink>
                    </li>
                    <li className="bottom-tab_list-item">
                        <NavLink to="/local-storage">
                            <img src={Check} alt="" />
                        </NavLink>
                    </li>
                    <li className="bottom-tab_list-item">
                        <NavLink to="/">
                            <img src={Add} alt="" />
                        </NavLink>
                    </li>
                    <li className="bottom-tab_list-item">
                        <NavLink to="/">
                            <img src={Notification} alt="" />
                        </NavLink>
                    </li>
                    <li className="bottom-tab_list-item">
                        <NavLink to="/profile">
                            <img src={Profile} alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomTabNavigator;