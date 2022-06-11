import style from './Skill.module.css';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className={style.description}>{props.description}</div>
        </div>
    );
}

export default Skill;
