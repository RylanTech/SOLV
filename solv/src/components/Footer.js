import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="flinks">
                    <a href="">Sign up</a>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}
export default Footer