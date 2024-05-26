import { close } from "../assets/icons";


interface NavPopUpProps {
    closePopup: () => void;
}

const NavPopUp: React.FC<NavPopUpProps> = ({ closePopup }) => {
    return (
        <>
            <div className="popup" data-testid="nav-popup">
                <div className="popup__close">
                    <button className="close-btn" aria-label="Close navigation menu"
                    onClick={() => closePopup()} >
                        <img src={close} alt="close button" />
                    </button>
                </div>
                <div>
                    <ul className="nav-list">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="backdrop" onClick={() => closePopup()}></div>
        </>
    )
}

export default NavPopUp;