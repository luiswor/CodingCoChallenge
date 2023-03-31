import styles from "@/styles/components/Marquee.module.scss"
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function MyMarquee({type}) {
  const marks = [
    {
      id: "first",
      text: "Checkea todos los cursos",
      imgPrev: "/yellow-bear.svg",
      imgLast: "/yellow-arrows.svg"
    },
    {
      id: "second",
      text: "Revisá todas las noticias",
      imgPrev: "/white-smile.svg",
      imgLast: "/white-arrows.svg"
    }
  ]
  if (type == "first") {
    return (
    <Marquee className={styles.marquee}
      speed={100}
      gradient={false}
    >
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[0].imgPrev} width={100} height={100} alt="bear"/>
        <span className={styles.marquee_text}>{marks[0].text}</span>
        <Image className={styles.marquee_icon} src={marks[0].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[0].imgPrev} width={100} height={100} alt="bear"/>
        <span className={styles.marquee_text}>{marks[0].text}</span>
        <Image className={styles.marquee_icon} src={marks[0].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[0].imgPrev} width={100} height={100} alt="bear"/>
        <span className={styles.marquee_text}>{marks[0].text}</span>
        <Image className={styles.marquee_icon} src={marks[0].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
    </Marquee>
    )
  }

  else if (type == "second") {
    return (
    <Marquee className={`${styles.marquee} ${styles.second}`}
      speed={100}
      gradient={false}
      direction={"right"}
    >
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[1].imgPrev} width={100} height={100} alt="smile"/>
        <span className={styles.marquee_text}>{marks[1].text}</span>
        <Image className={styles.marquee_icon} src={marks[1].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[1].imgPrev} width={100} height={100} alt="smile"/>
        <span className={styles.marquee_text}>{marks[1].text}</span>
        <Image className={styles.marquee_icon} src={marks[1].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
      <div className={styles.marquee_block}>
        <Image className={styles.marquee_icon} src={marks[1].imgPrev} width={100} height={100} alt="smile"/>
        <span className={styles.marquee_text}>{marks[1].text}</span>
        <Image className={styles.marquee_icon} src={marks[1].imgLast} width={100} height={100} alt="arrow right"/>
      </div> 
    </Marquee>
    )
  }  else if (type == "third") {
    return (
      <Marquee className={`${styles.marquee} ${styles.third}`}
        speed={50}
        gradient={false}
        direction={"right"}
      >
        <span className={styles.marquee_onlytext}>// Ver todos los cursos // Ver todos los cursos // ver todos los cursos </span>
      </Marquee>
    )
  }
}
