import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Andrei Matviychuk</h2>
                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    )
}
