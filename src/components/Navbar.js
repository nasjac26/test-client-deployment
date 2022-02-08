import { NavLink, useNavigate } from "react-router-dom";

function Navbar( { user, setUser } ) {
const navigate = useNavigate();
const url = "http://localhost:3001/logout"

    function handleLogoutClick() {
        fetch(url, { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
        }
        });
        navigate('/');
        window.location.reload();
    }

    function showLoginButton() {
        return (
        <NavLink className="btn btn-secondary m-3" to="/signin" setUser={ setUser }>Login</NavLink>
        );
    } 
    function showLogoutButton() {
        return (
        <button type="button" className="btn btn-secondary m-3" onClick={handleLogoutClick} >Logout</button>  
        );
    }

    function showAdminTools() {
        return (
        <NavLink className="btn btn-secondary m-3" to="/admin-tools">Admin Tools</NavLink>
        );

    }

    return ( 

        <div className="container-fluid">
            <div className="navbar justify-content-start navbar-light bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="https://i.ibb.co/qsWm9xR/white-logo.png" alt="" width="100" height="80"></img>
                </a>
                {/* Disabled until ready to sell */}
                {/* <NavLink className="btn btn-secondary m-3" to="/products">Shop Hair Extensions</NavLink> */}
                <NavLink className="btn btn-secondary m-3" to="/tools">Shop Tools</NavLink>              
                {!user ? showLoginButton() : showLogoutButton()}
                {!user.admin === true ? null : showAdminTools()}
            </div>
        </div>

    );
    }

export default Navbar;
