import { useState } from 'react';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';


export default function Navbar() {
    const navigate = useNavigate();

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    let user = true;

    return (
        <div className={`navbar ${toggleMenu ? 'navbar-open' : ''}`}>
            <div className={`navbar-main ${toggleMenu ? 'navbar-main-open' : ''}`}>
                <div className="navbar-main-logo">
                    <h2 onClick={() => navigate('/home')}>BUSINESSES</h2>
                </div>
                {toggleMenu ? (
                    <div className="navbar-main-links">
                        <div>
                            {user && <p onClick={() => navigate('/home')}>Home</p>}
                            {user && <p onClick={() => navigate('/adddata')}>Add Data</p>}
                        </div>
                        {!user && (
                            <div className="nav-signup-login-btn">
                                <Button onClick={() => navigate('/signup')} text="Signup" />
                                <Button onClick={() => navigate('/login')} text="Login" />
                            </div>
                        )}
                        {user ? <Button text="Signout" onClick={() => { handleSignout() }} /> : ""}
                    </div>
                ) : (
                    <div className='navbar-links'>
                        <div className="navbar-main-links-open">
                            {user && <p onClick={() => navigate('/home')}>Home</p>}
                            {user && <p onClick={() => navigate('/adddata')}>Add Data</p>}
                        </div>
                        <div>
                            {!user && (
                                <div className="nav-signup-login-btn-off">
                                    <Button onClick={() => navigate('/signup')} text="Signup" />
                                    <Button onClick={() => navigate('/login')} text="Login" />
                                </div>
                            )}
                        </div>
                        <div className='navbar-signout-btn'>
                            {user ? <Button text="Signout" onClick={() => { handleSignout() }} /> : ""}
                        </div>
                    </div>
                )
                }

                <div className="navbar-main-icon" onClick={handleToggleMenu}>
                    {toggleMenu ? <IoCloseSharp size={25} /> : <IoMdMenu size={25} />}
                </div>
            </div>
        </div>
    );
}
