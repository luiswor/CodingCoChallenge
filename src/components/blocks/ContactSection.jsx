import styles from "@/styles/components/Contact.module.scss";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact_content}>
        <h2 className={styles.contact_title}>#Sosloquehacés</h2>
        <div className={styles.contact_graphs}>
          <Image className={styles.contact_img} src="/bear-misc.svg" width={500} height={420} alt="Bear misc"/>
        </div>
      </div>

      <div className={styles.contact_form_container}>
        <h3 className={styles.contact_form_title}>¿Quieres saber más sobre nuestros ccursos?</h3>
        <p>Completá este formulario</p>

        <form className={styles.contact_form}>
          <div className={styles.contact_form_item}>
            <label htmlFor="form_name" className={styles.contact_form_label}>Nombre*</label>
            <input id="form_name" className={styles.contact_form_input} type="text" placeholder="Escribe tu nombre" required/>
          </div>

          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label} htmlFor="">Teléfono*</label>
            <input className={styles.contact_form_input} type="number" placeholder="Ingresa un número de contacto" required/>
          </div>

          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label} htmlFor="">E-mail*</label>
            <input className={styles.contact_form_input} type="email" placeholder="Escribe tu correo electrónico" required/>
          </div>

          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label} htmlFor="">Curso de interés*</label>
            <select className={styles.contact_form_select} name="curso" id="curso" required>
              <option value="1">Curso uno</option>
              <option value="1">Curso dos</option>
              <option value="1">Curso tres</option>
            </select>
          </div>

          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label} htmlFor="">Mensaje</label>
            <textarea className={styles.contact_form_textarea} name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escribe un mensaje adicional"></textarea>
          </div>

          <p className={styles.contact_form_msg}>* datos obligatorios</p>

          <button className={styles.contact_form_btn}>
            <span className={styles.contact_form_btn_text}>Enviar</span>
          </button>
        </form>
      </div>
    </section>
  )
}
