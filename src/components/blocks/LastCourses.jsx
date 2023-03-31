import styles from "@/styles/components/LastCourses.module.scss"
import Image from "next/image"
import { heroCards } from "@/pages/api/data"

export default function LastCourses() {

  return (
    <div className={styles.courses}>
      {
        heroCards.map((card)=>{
          return(
            <article key={card.id} className={styles.courses_item}>
              <h2 className={styles.courses_item_title}>{card.title}</h2>
              <p className={styles.courses_item_text}>{card.text}</p>
            </article>
          )
        })
      }

      <Image className={styles.courses_dots} src="/dots.svg" width={6} height={350} alt="dots"/>
      <Image className={styles.courses_dots_h} src="/dots-h.svg" width={350} height={6} alt="dots"/>

    </div>
  )
}
