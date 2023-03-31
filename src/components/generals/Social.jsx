import Image from 'next/image'
import styles from '@/styles/components/Social.module.scss'
import Link from 'next/link'
import { social } from '@/pages/api/data'

export default function Social({type}) {
  return (
    <div className={`${styles.social} `}>
      {
        social.map((item)=>{
          let idx = 'head_social_'+item.id;

          <Link key={idx} aria-label={`Ir a ${item.name}`} href="/" className={styles.social_link}>
            <Image src={item.src} width={50} height={50} className={styles.social_icon} alt={item.name}/>
          </Link>
        })
      }
    </div>
  )
}
