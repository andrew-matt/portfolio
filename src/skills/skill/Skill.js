import style from './Skill.module.scss';

function Skill(props) {
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
