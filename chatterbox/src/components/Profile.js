import { Link } from "react-router-dom";
import background1 from "./assets/white.jpeg";
import background2 from "./assets/white.jpeg";
import cric from "./assets/olalogo.png";
import { useEffect, useState } from "react";

const Profile = () => {

    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('loggedInUser')));
        console.log(JSON.parse(localStorage.getItem('loggedInUser')));
    }, []);

  

    return (
        <div>
            
            <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/signin" >Working</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/signup" >Working</Link>
                                </li>
                            </ul>
                        </div>


        </div>

    );
    
   

}

export default Profile;