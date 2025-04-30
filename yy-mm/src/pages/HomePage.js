import { Link } from "react-router-dom";
import "../css/homePage.css"
function HomePage() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><Link to="/products">דף הבית</Link></li>    
                    <li><Link to="/products">פסנתרים</Link></li>
                    <li><Link to="/products">כינורות</Link></li>
                    <li><Link to="/products">גיטרות</Link></li>
                    <li><Link to="/products">המיוחדים שלנו</Link></li>
                    <li><Link to="/products">עגלה</Link></li>
                    <li><Link to="/products">צור קשר</Link></li>
                </ul>
                <div className="logo">🎵 מיתרים</div>
            </div>
        </nav>
    );
}

export default HomePage;