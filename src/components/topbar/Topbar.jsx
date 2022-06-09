import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        driven.
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1 408 768 6785</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>jpenaloza10@yahoo.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}