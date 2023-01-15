import styles from "./Header.module.scss";
import cookchef from "../assets/images/chefcook.png"
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {

    const [show, setShowMenu] = useState(false);

    return (
        <header className= { `d-flex flex_row align-items ${styles.header}` }>
            <div className="flex-fill">
                <img src={cookchef} alt="logo" />
            </div>
            <ul className={styles.headerList} >
                <button className="btn btn-reverse-primary ">
                <i className="fa-solid fa-heart mr-5" ></i>
                    <span className="ml-10">Wishlist</span>
                </button>
                <button className=" btn btn-primary "><span>Connexion</span></button>
            </ul>
            <i onClick={() => setShowMenu(true)} className="fa-solid fa-bars nav-bar" ></i>   
            { show && 
                <>
                    <div onClick={ () => setShowMenu(false) } className="calc"></div>
                    <HeaderMenu/>
                </>
            }
        </header>
    ); 
}

export default Header;

