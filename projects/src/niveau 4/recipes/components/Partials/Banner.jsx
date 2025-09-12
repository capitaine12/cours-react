import style from '../../styles/Banner.module.css'
export default function Banner() {
    
    return (
        <>
        <div className={style.banner}>
            <div className={style.bLeft}>
                <strong>Hum Niam</strong>
                <h1>Rapide <span style={{color: "red"}}>Recette</span></h1>
                <span>Recette 100% Facile</span>
            </div>
           {/*  <div className="">
                <img src="" alt="" />
            </div> */}
        </div>
        </>
    )
}