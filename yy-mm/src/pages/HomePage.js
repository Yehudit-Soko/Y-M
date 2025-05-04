import { Link } from "react-router-dom";
import "../Css/homePage.css";
import Nav from "../Components/Nav";
import Products from "./Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgComponent from "../Components/ImgComponent";
import a from "../pictures/slider/a.png"
import b from "../pictures/slider/b.png"
import i from "../pictures/silderB/i.png"
import j from "../pictures/silderB/j.png"
import c from "../pictures/silderB/c.png"
import d from "../pictures/silderB/d.png"
import e from "../pictures/silderB/e.png"
import f from "../pictures/silderB/f.png"
import g from "../pictures/silderB/g.png"
import h from "../pictures/silderB/h.png"

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    const settings2 = {
        dots: true,
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }



    return (
        <>
            <Nav />
            <Slider {...settings1} className="custom-slider-brand">
                {brands1.map((b, index) => (
                    <ImgComponent key={index} path={b.image} className="slider-item-wrapper-brand" />
                ))}
            </Slider>

            <Slider {...settings2} className="custom-slider-brand">
                {brands2.map((b, index) => (
                    <ImgComponent key={index} path={b.image} className="slider-item-wrapper-brand" />
                ))}
            </Slider>
        </>
    );
}

export default HomePage;










