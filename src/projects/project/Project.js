import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href="" className={style.link}>
                    Посмотреть
                </a>
            </div>
            <div className={style.descriptionContainer}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Project;
