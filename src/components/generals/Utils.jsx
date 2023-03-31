import styles from "@/styles/components/Utils.module.scss"
import Image from "next/image"

export default function Utils() {
    return (
      <div className={styles.utils}>
        <button className={styles.chat}>
            <Image className={styles.chat_icon} src="/chat.svg" width={40} height="40" alt="chat"/>
            <span className={styles.chat_text}>Hola, Bro :)</span>
        </button>
      </div>
    )
}

