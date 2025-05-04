// import { Link } from "react-router-dom";
// import "../Css/nav.css"
// function Nav() {
//     return (
//         <nav>
//             <div className="nav-container">
//                 <ul>
//                     <li><Link to="/">דף הבית</Link></li>    
//                     <li><Link to="/piano">פסנתרים</Link></li>
//                     <li><Link to="/violin">כינורות</Link></li>
//                     <li><Link to="/guitar">גיטרות</Link></li>
//                     <li><Link to="/special">המיוחדים שלנו</Link></li>
//                     <li><Link to="/shoppingCart">עגלה</Link></li>
//                     <li><Link to="/">צור קשר</Link></li>
//                 </ul>
//                 <div className="logo">🎵 מיתרים</div>
//             </div>
//         </nav>
//     );
// }

// export default Nav;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Css/nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
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
