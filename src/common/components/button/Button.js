import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <button type={'submit'} className={style.button}>
            <span>{props.title}</span>
        </button>
    )
}