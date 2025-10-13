import Titre from '../components/Partials/Titre'
import style from '../styles/About.module.css'
export default function About() {
    
    return (
        <>

        <Titre label={"Bienvenu sur notre Blog"} />
        <div className={style.blogContainer}>
            <div className="">
           {/*  <FormInput />
            <Buttuon /> Jost */}
            </div>
        </div>
        </>
    )
}