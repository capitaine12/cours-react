import { Link, useParams } from "react-router-dom"
import './style.css'
import {articles} from './data'
export default function ArticleDetail() {
    const {id} = useParams()
    const article = articles.find(a => (a.id === parseInt(id)))
    return(
        <> {/* recuperation de l'article */}
         <Link className="item" to='/article'>🔙 Retour</Link>
        <div>
            <h1>detail de lartice {id} </h1>
            <p>{article.titre} </p>
            <p> {article.comentaire} </p>
        </div>
        </>
    )
}