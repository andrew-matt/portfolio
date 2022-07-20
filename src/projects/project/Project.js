import style from './Project.module.scss';

function Project(props) {
    return (
        <div className={style.container}>
            <a>
                <div className={style.project}>
                    <div className={style.imageWrapper}>
                        <img src={props.image} className={style.image}/>
                    </div>
                    <div className={style.content}>
                        <div className={style.title}>{props.title}</div>
                        <div className={style.description}>{props.description}</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;
