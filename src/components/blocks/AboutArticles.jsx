import { useRef } from "react";
import styles from "@/styles/components/AboutArticles.module.scss"
import Image from "next/image"
import { articles } from "@/pages/api/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function AboutArticles() {
    const sliderProps = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "3rem",
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        vertical: false,
        rows: 2,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
            
            
            
        ]

    }

    const mslider = useRef();
    
    return (
        <section className={styles.articles}>
            <div className={styles.articles_box}>
                <Slider ref={mslider} {...sliderProps}>
                    {
                        articles.map((article) => {
                            return(
                                <article key={article.id} className={styles.article}>
                                    <div className={styles.article_img_box}>
                                        <Image className={styles.article_img} src={article.img} width={300} height={300} alt={article.title}/>

                                        { article.vacancies &&
                                        <div className={`${styles.article_cover} ${styles.soldout}`}>
                                            <p className={styles.article_cover_text}>
                                                <strong>Sold Out!</strong><br />
                                                <span>Reservá para la próxima edición</span>
                                            </p>
                                            <Image className={styles.article_cover_icon} src="/thunder.svg" width={100} height={100} alt="icon thunder"/>
                                        </div>

                                        ||

                                        <div className={`${styles.article_cover} ${styles.open}`}>
                                            <p className={styles.article_cover_text}>
                                                <strong>Hay plazas disponibles</strong><br />
                                                <span>¡Apuntate!</span>
                                            </p>
                                            <Image className={styles.article_cover_icon} src="/thunder-y.svg" width={100} height={100} alt="icon thunder"/>
                                        </div>
                                    }   
                                    </div>
                                    <h3 className={styles.article_title}>{article.title}</h3>   
                                </article>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className={styles.articles_options}>
                <button className={styles.articles_btn} onClick={() => mslider.current.slickPrev()}>
                    <Image className={styles.articles_btn_icon} src="/next-arrow-up.svg" width={20} height={20} alt="arrow up"/>
                </button>
                <button className={styles.articles_btn} onClick={() => mslider.current.slickNext()}>
                    <Image className={styles.articles_btn_icon} src="/next-arrow-down.svg" width={20} height={20} alt="arrow down"/>
                </button>
            </div>
        </section>
    )

}
