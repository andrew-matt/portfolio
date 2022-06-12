import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contacts}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea cols="30" rows="10"></textarea>
                </form>
                <a href="" className={style.link}>
                    Send
                </a>
            </div>
        </div>
    )
}

export default Contacts