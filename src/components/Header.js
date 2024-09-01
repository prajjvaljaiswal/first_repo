import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="flex justify-between border-2 border-black py-2">
            <h1>Title</h1>
            <div>
                <ul className="flex">
                    <li className="px-10">
                        <Link to={"/"}>home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li className="px-10">
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        cart
                    </li>
                </ul>
            </div>
            <button>Sign-In</button>
        </div>
    )
}

export default Header;