import { Link } from "react-router-dom"
import { articles } from "./data"

export default function Articles() {

    return (
        <div>
        <h1>Listes des articles</h1>
        {
            articles.map((article) => (
                <div key={article.id}>
                    <h3 > {article.titre} </h3>
                    <Link to={`/article/${article.id}`} >
                    <button>voir plus</button>
                    </Link>
                </div>
            )
        )
        }
        </div>
    )
}