import style from './Contacts.module.scss'
import styleContainer from "../common/styles/sass/Container.module.scss";
import {Title} from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact With Me'}/>
                <form className={style.contactFormWrapper} spellCheck={"false"}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea cols="30" rows="10" className={style.textarea}></textarea>
                </form>
                <a href="" className={style.link}>
                    Send message
                </a>
            </div>
        </div>
    )
}

export default Contacts