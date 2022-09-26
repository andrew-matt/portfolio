import style from './Skill.module.scss'
import {ReactNode} from 'react'

type SkillPropsType = {
    title: string
    description: string
    icon: ReactNode
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.container}>
            <div className={style.skill}>
                <div className={style.icon}>{props.icon}</div>
                <h4 className={style.title}>{props.title}</h4>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Skill;
