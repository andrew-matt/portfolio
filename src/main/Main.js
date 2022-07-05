import style from './Main.module.scss';
import styleContainer from '../common/styles/sass/Container.module.scss';
import Photo from './Photo.png'

export const Main = () => {

    const photoStyle = {
        backgroundImage: `url(${Photo})`,
        backgroundSize: 'cover'
    }

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greetingBlock}>
                    <h1>
                        <span>Hi, I'm</span>
                        <span> Andrei Matviychuk</span>
                    </h1>
                    <p>a Front-end Developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        aliquam at consectetur, cupiditate dolorum eligendi facere inventore minus nam, nesciunt odio
                        officia quidem ratione repellendus tempora ullam vero, vitae voluptatem?</p>
                </div>
                <div>
                    <div className={style.photoContainer} style={photoStyle}>
                    </div>
                </div>
            </div>
        </div>
    );
}