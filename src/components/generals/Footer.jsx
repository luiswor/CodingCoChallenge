import styles from "@/styles/components/Footer.module.scss"
import Link from "next/link"
import { Bodoni_Moda } from 'next/font/google'
import { pages, social } from "@/pages/api/data"
import Image from "next/image"

const bodoni = Bodoni_Moda({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_menu}>
            <ul className={styles.footer_menu_list}>
                {
                    pages.map((item)=>{
                        let idx = "foot_"+item.id;

                        return(
                            <li key={idx} className={styles.footer_menu_item}>
                                <Link aria-label={`ir a ${item.title}`} href="/">{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

        <div className={styles.footer_content}>
            <div className={styles.footer_social}>
                {
                    social.map((item)=>{
                        let idx = "footer_"+item.id;
                        return (
                            <Image className={styles.footer_social_icon} key={idx} src={item.src} width={50} height={50} alt={item.name}/>
                        )
                    })
                }
            </div>

            <div className={styles.footer_logo}>
                <div className={styles.identity_logo}>
                    <Image src="/white-logo.svg" width={200} height={100} alt="logo"/>
                </div>
                <ul className={styles.footer_menu_mobile}>
                    {
                        pages.map((item)=> {
                            let idx = "foot_mobile_"+item.id;
                            return(
                                <li key={idx} className={styles.footer_menu_mobile_item}>
                                    <Link aria-label={`ir a ${item.title}`} href="/">{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className={styles.footer_contact}>
                <p>
                    <span>Calle Gran Vía 27, 28013 Madrid,</span> <br />
                    <span>+34 910 52 66 48 | +34 612 27 84 09</span> <br />
                    <span>madrid@brotherad.com</span>
                </p>
            </div>
        </div>
        <div className={styles.footer_info}>
            <div className={styles.footer_address}>
                <p>2023 Brother Madrid</p>
            </div>
        
            <div className={styles.footer_copy}>
                <p>Made by 20dedos</p>
            </div>
        </div>
    </footer>
  )
}
