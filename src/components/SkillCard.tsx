import style from '../styles/SkillCard.module.css'

interface IProps {
    technology: string
    img : string
}

function SkillCard({img, technology}: IProps) {
  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img alt='' src={img}/>
        </div>
        <h1 className={style.text}>{technology}</h1>
    </div>
  )
}

export default SkillCard