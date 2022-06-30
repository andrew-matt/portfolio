import style from './Project.module.css';

function Project(props) {
    return (
        <a className={style.link}>
            <div className={style.projectContainer}>
                <div className={style.imgPlus}>
                    <div className={style.imageContainer} style={props.style}>
                </div>
                </div>
                <div className={style.descriptionContainer}>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                </div>
            </div>
        </a>
    );
}

export default Project;
