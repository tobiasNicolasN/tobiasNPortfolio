import { BsTelephone, BsEnvelope, BsFiletypePdf } from "react-icons/bs";
import style from "../styles/Contact.module.css";

interface IProps{
    language : string
}

function Contact({language}: IProps) {
  return (
    <>
    <h1 className={style.sectionName}>
          {language === "es" ? "CONTACTO" : "CONTACT"}
        </h1>
    <div className={style.container}>
      <div className={style.card}>
        <BsEnvelope />
        <h1>tobias.nicolas001@gmail.com</h1>
      </div>
      <div className={style.card}>
        <BsTelephone />
        <h1>+54 9 11 3798-8966</h1>
      </div>
      <div className={style.card}>
        <BsFiletypePdf />
        <button>Descargar Curriculum</button>
      </div>
    </div>
    </>
  );
}

export default Contact;
