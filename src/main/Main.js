import style from './Main.module.scss';
import styleContainer from '../common/styles/sass/Container.module.scss';
import Photo from './Photo.png'

export const Main = () => {

    const mainDescription = 'a Front-end Developer. Nec ullamcorper sit amet risus nullam eget felis. Felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper malesuada proin libero nunc. Purus faucibus ornare suspendisse sed nisi lacus sed. Pellentesque elit eget gravida cum.'

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
                    <p>{mainDescription}</p>
                </div>
                <div>
                    <div className={style.photoContainer} style={photoStyle}>
                    </div>
                </div>
            </div>
        </div>
    );
}