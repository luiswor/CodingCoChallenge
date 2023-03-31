import styles from "@/styles/components/News.module.scss"
import Image from "next/image"
import { Masonry } from "react-plock"
import { news } from "@/pages/api/data"

export default function NewsSection() {

  return (
    <section className={styles.news}>
        <h2 className={styles.news_title}>Noticias Frescas</h2>
        <div className={styles.news_content}>
            <Masonry
                items={news}
                config={{
                    columns: [1,2,4],
                    gap: [12, 24, 30],
                    media: [640, 800, 1024],
                }}
                render={(item, idx) =>(
                    <article key={idx} className={styles.new}>
                        <div className={styles.new_img_box}>
                            <Image className={styles.new_img} src={item.imgSrc} width={400} height={item.imgH} alt={item.title}/>
                        </div>
                        <h3 className={styles.new_title}>{item.title}</h3>
                        <div className={styles.new_footer}>
                            <p className={styles.new_footer_date}>Publicado: {item.date}</p>
                            <span>•</span>
                            <button aria-label={`Leer ${item.title}`} className={styles.new_footer_btn}>Leer más →</button>
                        </div>
                    </article>
                )}
            />
        </div>
        <Image className={`${styles.news_img} ${styles.cloud}`} src="/cloud.svg" width={300} height={200} alt="cloud" />
        <Image className={`${styles.news_img} ${styles.asterisk}`} src="/black-asterisk.svg" width={300} height={200} alt="asterisk" />
    </section>
  )
}
