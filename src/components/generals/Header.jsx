import { useEffect, useState } from "react"
import { useLenis } from "@studio-freight/react-lenis"
import styles from "@/styles/components/Header.module.scss"
import Link from "next/link"
import Image from "next/image"
import localFont from 'next/font/local'
import { pages } from "@/pages/api/data"
import Social from "@/components/generals/social"

const Larken = localFont({
  src: [
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

const Item = ({ text, link }) => {
  return (
    <li className={styles.nav_item}>
     <Link href={link} aria-label={`Ir a ${text}`} className={styles.nav_item_link}>{text}</Link>
     <Image src="/hex-blue.svg" width={50} height={50} className={styles.nav_item_icon} alt="blue hex"/>
    </li> 
  ) 
} 

const ItemMobile = ({ text, link}) => {
  return (
    <li className={styles.navmobile_item}>
     <Link href={link} aria-label={`Ir a ${text}`} className={styles.navmobile_item_link}>{text}</Link>
    </li> 
  ) 
} 

export default function Header() {
  const [OnDown, setOnDown] = useState(false);

  const [showMenu, setshowMenu] = useState(false)
  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>{
          setOnDown(window.pageYOffset > 100);
        }
      );
    }
  }, []);

  const menuList = pages;

  return (
    <header className={`${styles.header} ${OnDown ? styles.active : ''}`}>
      <div className={styles.identity}>
        <Link href="/" aria-label="Ir a la página principal" className={styles.identity_link}>
          <svg className={styles.identity_svg}  width="116.847" height="24.713" viewBox="0 0 116.847 24.713">
            <g id="Grupo_12704" data-name="Grupo 12704" transform="translate(-1.83 -170.568)">
              <g id="Grupo_12297" data-name="Grupo 12297" transform="translate(1.83 170.568)">
                <path id="Trazado_12002" data-name="Trazado 12002" d="M10.783,170.966H1.9a.073.073,0,0,0-.073.075v.268a.072.072,0,0,0,.057.071l2.454.561v21.786l-2.454.559a.076.076,0,0,0-.057.073v.268a.075.075,0,0,0,.073.075h8.88a.075.075,0,0,0,.073-.075V171.041A.073.073,0,0,0,10.783,170.966Z" transform="translate(-1.83 -170.158)"/>
                <path id="Trazado_12003" data-name="Trazado 12003" d="M9.726,182.227c4.705-.429,6.432-3.508,6.432-5.559v-.1c0-3.506-2.761-5.6-7.387-5.6H6.987a.075.075,0,0,0-.075.075v.268a.075.075,0,0,0,.075.073h.582c1.68,0,2.365,1.521,2.365,5.252v.268c0,3.9-.523,5.151-2.147,5.151h-.8a.075.075,0,0,0-.075.073v.268a.075.075,0,0,0,.075.075h.728a1.9,1.9,0,0,1,1.9,1.124,11.065,11.065,0,0,1,.647,4.6V189c0,4.927-.88,5.283-2.328,5.283H7.024a.076.076,0,0,0-.075.075v.268a.076.076,0,0,0,.075.075H8.988c2.778,0,4.919-.712,6.365-2.115A5.739,5.739,0,0,0,17.1,188.5v-.2C17.1,185.537,14.574,182.646,9.726,182.227Z" transform="translate(3.422 -170.158)"/>
                <path id="Trazado_12004" data-name="Trazado 12004" d="M19.758,174.148a2.746,2.746,0,1,0,2.985,2.8A2.9,2.9,0,0,0,19.758,174.148Z" transform="translate(13.685 -166.869)"/>
                <path id="Trazado_12005" data-name="Trazado 12005" d="M22.469,190.928l-2.456-.592V174.354a.073.073,0,0,0-.073-.073H12.772a.073.073,0,0,0-.075.073v.236a.075.075,0,0,0,.035.063l1.531.988v14.8l-1.8.492a.072.072,0,0,0-.055.071v.2a.075.075,0,0,0,.073.075h9.972a.075.075,0,0,0,.073-.075V191A.074.074,0,0,0,22.469,190.928Z" transform="translate(9.099 -166.732)"/>
                <path id="Trazado_12006" data-name="Trazado 12006" d="M27.455,174.148c-4.2.214-7.747,4.166-7.747,8.634v.169c0,4.449,3.548,8.386,7.747,8.6h0a.076.076,0,0,0,.075-.073v-.2a.086.086,0,0,0-.063-.073c-.872-.258-1.5-.445-1.5-8.249v-.169c0-7.729.62-7.959,1.48-8.274l.037-.014a.075.075,0,0,0,.049-.069v-.2a.076.076,0,0,0-.024-.053A.074.074,0,0,0,27.455,174.148Z" transform="translate(16.645 -166.869)"/>
                <path id="Trazado_12007" data-name="Trazado 12007" d="M24.313,174.148a.073.073,0,0,0-.077.073v.2a.073.073,0,0,0,.047.069l.037.014c.86.315,1.48.545,1.48,8.274v.169c0,7.8-.63,7.991-1.511,8.252a.074.074,0,0,0-.053.071v.2a.078.078,0,0,0,.022.053.08.08,0,0,0,.051.02h0c4.2-.214,7.747-4.15,7.747-8.6v-.169C32.06,178.314,28.512,174.362,24.313,174.148Z" transform="translate(21.324 -166.869)"/>
                <path id="Trazado_12008" data-name="Trazado 12008" d="M39.82,190.9l-.146-.1a.078.078,0,0,0-.1.014,2.676,2.676,0,0,1-2.125,1.019,1.543,1.543,0,0,1-1.637-1.747v-12.53H39.56a.073.073,0,0,0,.073-.073v-.472a.073.073,0,0,0-.073-.073H35.812v-5.218h-.327l-5.4,4.8a.074.074,0,0,0-.024.057v.364h-1.49a.075.075,0,0,0-.075.073v.472a.075.075,0,0,0,.075.073h1.49v12.833c0,2.361,1.645,3.713,4.514,3.713a5.335,5.335,0,0,0,5.271-3.109A.076.076,0,0,0,39.82,190.9Z" transform="translate(25.724 -169.384)"/>
                <path id="Trazado_12009" data-name="Trazado 12009" d="M43.326,194.767l-1.838-.492v-13.86l.146-9.772a.079.079,0,0,0-.026-.057.07.07,0,0,0-.059-.016l-7.314,1.145a.074.074,0,0,0-.063.073v.236a.072.072,0,0,0,.035.063l1.531.988v21.2l-1.767.49a.073.073,0,0,0-.053.071v.2a.075.075,0,0,0,.073.075h9.317a.075.075,0,0,0,.073-.075v-.2A.072.072,0,0,0,43.326,194.767Z" transform="translate(31.328 -170.568)"/>
                <path id="Trazado_12010" data-name="Trazado 12010" d="M48.875,191.068l-1.8-.492V178.67c0-2.832-1.619-4.522-4.331-4.522a7.322,7.322,0,0,0-4.414,1.637.068.068,0,0,0-.026.055v.2a.076.076,0,0,0,.075.075c2.009,0,2.946.939,2.946,2.959v11.5l-1.515.488a.075.075,0,0,0-.051.071v.2a.075.075,0,0,0,.075.075h9.024a.075.075,0,0,0,.073-.075v-.2A.072.072,0,0,0,48.875,191.068Z" transform="translate(35.859 -166.869)"/>
                <path id="Trazado_12011" data-name="Trazado 12011" d="M58.92,188.045a.076.076,0,0,0-.1-.022,7.806,7.806,0,0,1-3.676,1.037c-3.213,0-5.13-2.53-5.13-6.767v-.2c0-6.214,1.039-7.318,2.056-7.576a.076.076,0,0,0,.055-.073v-.2a.073.073,0,0,0-.073-.073,7.88,7.88,0,0,0-5.681,2.562,9.587,9.587,0,0,0-2.507,6.611v.134c0,4.841,3.085,8.093,7.678,8.093a9.754,9.754,0,0,0,7.515-3.225.074.074,0,0,0,.006-.094Z" transform="translate(41.611 -166.852)"/>
                <path id="Trazado_12012" data-name="Trazado 12012" d="M49.671,174.148a.073.073,0,0,0-.063.026.072.072,0,0,0-.014.069,22.6,22.6,0,0,1,.4,7.019l-2.3.165a.073.073,0,0,0-.069.073v.236a.073.073,0,0,0,.073.073h7.9a.073.073,0,0,0,.073-.073V181.2C55.669,178.05,53.26,174.467,49.671,174.148Z" transform="translate(45.494 -166.869)"/>
                <path id="Trazado_12013" data-name="Trazado 12013" d="M62.291,176.952a2.9,2.9,0,0,0-2.985-2.8,2.746,2.746,0,1,0,2.985,2.8Z" transform="translate(54.556 -166.869)"/>
                <path id="Trazado_12014" data-name="Trazado 12014" d="M62.018,190.928l-2.454-.592V174.354a.073.073,0,0,0-.075-.073H52.321a.073.073,0,0,0-.073.073v.236a.078.078,0,0,0,.033.063l1.531.988v14.8l-1.8.492a.072.072,0,0,0-.055.071v.2a.076.076,0,0,0,.075.075H62a.076.076,0,0,0,.075-.075V191A.076.076,0,0,0,62.018,190.928Z" transform="translate(49.969 -166.732)"/>
              </g>
            </g>
          </svg>
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav_menu}>
          {
            menuList.map((item)=>{
              let idx = "it_"+item.id;
              return(
                <Item key={idx} text={item.title} link={item.link} />
              )
            })
          }
        </ul>
        <div className={styles.nav_socialbox}>
          <Social></Social> 
        </div>
      </nav>

      <div className={styles.nav_options}>
          <div className={styles.nav_options_phone}>
            <Image src="/phone.svg" width={30} height={30} alt="phone"/>
            <span className={styles.nav_options_text}>915 76 68 76</span>
          </div>

          <button className={`${styles.nav_btn} ${showMenu ? styles.active : null}`} onClick={toggleMenu}>
            <span className={styles.nav_btn_line}></span>
            <span className={styles.nav_btn_line}></span>
            <span className={styles.nav_btn_line}></span>
          </button>
      </div>

      <nav className={`${styles.navmobile} ${showMenu ? styles.show : null}`}>
        <ul className={`${styles.navmobile_menu} ${Larken.className}`}>
          {
            menuList.map((item)=>{
              let idx = 'itm_'+item.id;
              return(
                <ItemMobile text={item.title} link={item.link} key={item.id} />
              )
            })
          }
        </ul>

        <div className={styles.navmobile_info}>
          <p className={`${styles.navmobile_info_title} ${Larken.className}`}>Ven a conocernos</p>

          <p className={styles.navmobile_info_data}>
            Calle de las Huertas 48, <br />
            28014, Madrid <br />
            +34 910 52 66 49 | +34 612 27 84 09 <br />
            madrid@brotherad.com
          </p>
        </div>
        <Social type={'mobile'}></Social> 

        <div className={styles.navmobile_footer}>
          <Image src='/globe.svg' width={50} height={50} className={styles.navmobile_footer_icon} alt="globe"/>

          <p className={`${styles.navmobile_footer_text} ${Larken.className}`}>Worldwide</p>
          
          <Image src='/globe.svg' width={50} height={50} className={styles.navmobile_footer_icon} alt="globe"/>
        </div>
      </nav>
    </header>
  )
}
