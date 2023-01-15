import styles from './HeaderMenu.module.scss'

function HeaderMenu() {
    return (
        <ul className={ `${styles.headerMenu} card` }>
            <li>
                <div className='d-flex flex-row align-items '>
                    <p>Wishlist</p>
                    <i className="fa-solid fa-heart m-20-l" ></i>
                </div>
            </li>
            <li>
                <div className='d-flex flex-row align-items '>
                    <p>Connexion</p>
                    <i class="fa-solid fa-user m-20-l"></i>
                </div>
            </li>

        </ul>
    );
}

export default HeaderMenu;