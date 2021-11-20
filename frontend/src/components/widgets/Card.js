import "./Card.css"

const Card = (props) => {

    const cardHeight = props.height
    const cardWidth = props.width

    return(
        <div className="card" style={{borderRadius: "0.5rem", height:cardHeight, width:cardWidth}}>
            <div className="card-body">
                
                    {props.children}
                    
                {/* <i class="material-icons">cloud</i> */}
            </div>
        </div>
    )
}

export default Card;