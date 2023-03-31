import styles from "@/styles/components/About.module.scss"
import localFont from 'next/font/local'
import Image from "next/image"
import AboutArticles from "./AboutArticles"

const Larken = localFont({
src: [
    {
        path: '../../../public/fonts/LarkenDEMO-Thin.otf',
        weight: '200'
    },
    {
        path: '../../../public/fonts/LarkenDEMO-Regular.otf',
        weight: '400'
    },
    {
        path: '../../../public/fonts/LarkenDEMO-Bold.otf',
        weight: '700'
    }
]
})

export default function AboutSection() {
  return (
    <section className={`${styles.about}`}>
        <div className={styles.about_content}>
            <h2 className={`${styles.about_title} ${Larken.className}`}>Mucho mas que una escuela de <span className={styles.about_title_detail}>creativos</span></h2>

            <div className={styles.about_description}>
                <p className={styles.about_paragraph}>Un Brother es alguien que <span className="underline">piensa continuamente</span>, inquieto, <strong>curioso</strong> y reflexivo.</p>

                <p className={styles.about_paragraph}>Que se <span className="underline">plantea preguntas</span> y busca las respuestas. Un Brother es alguien que se abre camino, proactivo, que tiene iniciativas, que <strong>busca oportunidades.</strong></p>

                <p className={styles.about_paragraph}>Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea, y si gana sigue a por más.</p>

                <p className={styles.about_paragraph}>Y si pierde, <strong>no se rinde <span className="underline">jamás</span></strong></p>
            </div>
        </div>
        <div className={styles.about_aside}>
            <h2 className={`${styles.about_title} ${Larken.className}`}><strong>Cursos & Workshops</strong></h2>
            
            <AboutArticles></AboutArticles>
        </div>

        <Image className={`${styles.about_icon} ${styles.trap}`} src="/yellow-trap.svg" width={150} height={150} alt="Trap" />
        <Image className={`${styles.about_icon} ${styles.cloud}`} src="/yellow-cloud.svg" width={150} height={150} alt="Yellow cloud" />
        <Image className={`${styles.about_icon} ${styles.hex}`} src="/yellow-hex-full.svg" width={150} height={150} alt="Yellow hex" /> 
        <Image className={`${styles.about_icon} ${styles.asterisk}`} src="/yellow-asterisk-big.svg" width={150} height={150} alt="Yellow asterisk" /> 
    </section>
  )
}
