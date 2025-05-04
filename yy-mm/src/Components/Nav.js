import { Link } from "react-router-dom";
import "../css/nav.css"
function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">דף הבית</Link></li>    
                    <li><Link to="/piano">פסנתרים</Link></li>
                    <li><Link to="/violin">כינורות</Link></li>
                    <li><Link to="/guitar">גיטרות</Link></li>
                    <li><Link to="/special">המיוחדים שלנו</Link></li>
                    <li><Link to="/shoppingCart">עגלה</Link></li>
                    <li><Link to="/">צור קשר</Link></li>
                </ul>
                <div className="logo">🎵 מיתרים</div>
            </div>
        </nav>
    );
}

export default Nav;