import { Link } from "react-router-dom";
import Parse from "parse";

const UserFooter = () => {
    const logOut = () => {
        Parse.User.current().authenticated = false;
    }
    const goToHome = () => {
        Parse.User.current().authenticated = true;
    }

    return(
        <div>
            <nav>
                <div>
                    <Link to="/">
                        <button onClick={goToHome}>Home</button>
                    </Link>
                </div>
                <div>
                    <Link to="/auth/login">
                        <button onClick={logOut}>Log Out</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

export default UserFooter;