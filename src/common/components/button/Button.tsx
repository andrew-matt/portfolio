import style from './Button.module.scss'

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button type={'submit'} className={style.button}>
            <span>{props.title}</span>
        </button>
    )
}