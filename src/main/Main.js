import style from './Main.module.css';
import styleContainer from '../common/styles/sass/Container.module.scss'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Andrei Matviychuk</h1>
                    <p>Front-end Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
