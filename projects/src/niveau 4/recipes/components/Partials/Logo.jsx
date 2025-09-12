import style from '../../styles/Logo.module.css'
import clsx from "clsx";

export default function Logo({isActive}) {
    
    return (
        <>
         <div className={style.hLogo}>
                    <span className={style.lghumm}>Humm </span>
                    <span className={clsx(style.lgniam, { [style.shadow]: isActive })}>Niam</span>
        </div>
        </>
    )
}