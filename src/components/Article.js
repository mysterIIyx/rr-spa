import { Component } from "react"

export default class Article extends Component {
    render() {
        const {title1, title2,  author, text} = this.props
        return (
            <div className="article-card">
                <h1>{title1}</h1>
                <h2>{title2}</h2>
                <h3>Autor: {author}</h3>
                <p>{text}</p>
            </div>
        )
    }
}