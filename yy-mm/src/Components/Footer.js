import "../Css/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>עלינו</h3>
                    <p>
                        🎶 חנות "מיתרים" היא הבית לאוהבי המוזיקה.<br></br> אצלנו תמצאו כלי נגינה מכל הסוגים והכי איכותיים בשוק, פה תקבלו את השירות המקצועי והאדיב שנמצא כאן במיוחד בשבילכם אתם תלוו ביחס אישי עד לסיום הקניה. .
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>קישורים שימושיים</h3>
                    <ul>
                        <li><a href="/">🏠 דף הבית</a></li>
                        {/* <li><a href="/piano">🎹 פסנתרים</a></li>
                        <li><a href="/guitar">🎸 גיטרות</a></li>
                        <li><a href="/violin">🎻 כינורות</a></li> */}
                        <li><a href="/products">⭐ מוצרים</a></li>
                        <li><a href="/contact">✉️ צור קשר</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>צור קשר</h3>
                    <p>🏠 רחוב המוזיקה 10, תל אביב</p>
                    <p>📞 03-1234567</p>
                    <p>✉️ contact@mitarim.co.il</p>
                    <p>🕘 שעות פעילות: א'-ה' 9:00-19:00</p>
                </div>
            </div>

            <div className="footer-bottom">
                © כל הזכויות שמורות למיתרים 🎵 | 2025
            </div>
        </footer>
    );
}

export default Footer;
