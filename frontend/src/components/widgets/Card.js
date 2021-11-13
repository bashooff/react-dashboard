import "./Card.css"

const Card = (props) => {

    const cardHeight = props.height
    const cardWidth = props.width

    return(
        <div className="card" style={{borderRadius: "25px", height:cardHeight, width:cardWidth}}>
            <div className="card-body">
                <p class="card-text">
                    {props.children}
                    </p>
                {/* <i class="material-icons">cloud</i> */}
            </div>
        </div>
    )
}

export default Card;