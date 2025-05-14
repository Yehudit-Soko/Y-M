import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "./ProductsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgComponent from "../components/ImgComponent";
import a from "../pictures/slider/a.png";
import b from "../pictures/slider/b.png";
import i from "../pictures/silderB/i.png";
import j from "../pictures/silderB/j.png";
import c from "../pictures/silderB/c.png";
import d from "../pictures/silderB/d.png";
import e from "../pictures/silderB/e.png";
import f from "../pictures/silderB/f.png";
import g from "../pictures/silderB/g.png";
import h from "../pictures/silderB/h.png";
import Header from "../components/Header";
import "../css/homePage.css";

function HomePage() {
    const brands1 = [
        { image: a },
        { image: b },
    ];
    const brands2 = [
        { image: i },
        { image: j },
        { image: c },
        { image: d },
        { image: e },
        { image: f },
        { image: g },
        { image: h },
    ];

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Nav />
            <Slider {...settings1} className="custom-slider-brand1">
                {brands1.map((b, index) => (
                    <ImgComponent key={index} path={b.image} className="slider-item-wrapper-brand" />
                ))}
            </Slider>

            {/* אודות החנות ופרטים על המוצרים שלנו */}
            <section class="about-store">
                <h2>ברוכים הבאים לחנות שלנו</h2>
                <p>המסלול שבו מוזיקה נפגשת עם איכות ויצירתיות! אנחנו מתמחים במכירת כלי נגינה מקצועיים, ציוד אולפן, ואביזרים למוזיקאים בכל הרמות. אצלנו תמצאו כל מה שצריך כדי להתחיל לנגן, לשדרג את הציוד שלכם, או פשוט להנות מהטוב ביותר.</p>

                <p>בין אם אתם נגנים מתחילים, חובבים או מקצוענים, החנות שלנו מציעה מגוון רחב של כלים, כולל גיטרות, פסנתרים, תופים, כלי נשיפה ועוד. כל אחד מהם נבחר בקפידה על ידי צוות מומחים, כדי שתהיה לך את החוויה המוזיקלית הטובה ביותר.</p>

                <h3>היתרונות שלנו</h3>
                <ul>
                    <li><strong>מגוון רחב<br></br></strong> אנחנו מציעים כלים איכותיים ממותגים מובילים בעולם המוזיקה, כך שתוכל למצוא בדיוק את מה שאתה מחפש.</li><br></br>
                    <li><strong>ייעוץ מקצועי<br></br></strong> צוות המומחים שלנו זמין לכל שאלה וייעוץ, כדי לעזור לך לבחור את הכלי המתאים ביותר לצרכים שלך.</li><br></br>
                    <li><strong>שירות אישי<br></br></strong> אצלנו כל לקוח מקבל יחס אישי, ואנחנו כאן כדי שתהיה לך חוויית קנייה מושלמת.</li><br></br>
                </ul>

                <p>אנחנו מאמינים שכל אחד יכול ליצור מוזיקה, ושהתהליך צריך להיות מהנה ומספק. בחנות שלנו לא רק תמצא כלים מקצועיים, אלא גם את ההשראה להתחיל לנגן ולהתפתח כאמנים.</p>
            </section>


            <Slider {...settings2} className="custom-slider-brand2">
                {brands2.map((b, index) => (
                    <ImgComponent key={index} path={b.image} className="slider-item-wrapper-brand" />
                ))}
            </Slider>

            <Footer></Footer>
        </>
    );
}

export default HomePage;
