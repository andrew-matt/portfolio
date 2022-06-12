import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Andrei Matviychuk</h2>
                <div className={style.footer}>
                    <div className={style.footerSocial}></div>
                    <div className={style.footerSocial}></div>
                    <div className={style.footerSocial}></div>
                    <div className={style.footerSocial}></div>
                </div>
                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer