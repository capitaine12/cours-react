import style from '../styles/About.module.css'
export default function About() {
    
    return (
        <>

        <h1 className={style.cont}>Bienvenu sur notre Blog</h1>
        <div className={style.blogContainer}>
            <h2 className={style.blogTitle}>Inscrivez-vous a notre Newletter</h2>
            <div className="">
           {/*  <FormInput />
            <Buttuon /> */}
            </div>
        </div>
        </>
    )
}