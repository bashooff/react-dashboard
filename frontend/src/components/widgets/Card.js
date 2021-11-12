import "./Card.css"

const Card = (props) => {
    return(
        <div className="card" style={{borderRadius: "25px"}}>
            <div className="card-body">
                <p class="card-text">
                    <h3>{props.text}</h3>
                    </p>
                <i class="material-icons">cloud</i>
            </div>
        </div>
    )
}

export default Card;