import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Contacts = () => {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title={'Contact With Me'}/>
                <form className={style.form} spellCheck={"false"}>
                    <span className={style.title}>your name</span>
                    <input type="text" className={style.input}/>
                    <span className={style.title}>email</span>
                    <input type="text" className={style.input}/>
                    <span className={style.title}>your message</span>
                    <textarea cols="30" rows="10" className={style.textarea}/>
                    <div>
                       <Button title={'SEND MESSAGE'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
