import { FaGithub, FaLinkedin } from 'react-icons/fa';
import style from '../styles/SideBar.module.css'

const Sidebar = () => {
    const openURL = (url: string) => {
        window.open(url, '_blank')
    }

  return (
    <div className={style.container}>
    <div className={style.sideBar}>
      </div>
      <div className={style.icon} onClick={() => openURL("https://github.com/tobiasNicolasN")}>
        <FaGithub/>
      </div>
      <div className={style.icon} onClick={() => openURL("https://www.linkedin.com/in/tobiasnicolasn/")}>
        <FaLinkedin/>
    </div>
    </div>
  );
};

export default Sidebar;