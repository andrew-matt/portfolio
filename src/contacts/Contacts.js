import style from './Contacts.module.scss'
import styleContainer from "../common/styles/sass/Container.module.scss";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact With Me'}/>
                <form className={style.contactFormWrapper} spellCheck={"false"}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea cols="30" rows="10" className={style.textarea}/>
                    <div className={style.buttonContainer}>
                        <button className={style.button}>
                            <span>SEND MESSAGE</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
