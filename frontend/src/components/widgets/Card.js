import "./Card.css"

const Card = (props) => {
    return(
        <div className="card">
            <div class="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card;