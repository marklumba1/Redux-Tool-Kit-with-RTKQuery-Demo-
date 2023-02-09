import "../assets/styles/card/card.css"
const Card = ({props}) => {
    console.log(props)
    return ( 
        <div className="card-container">
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
     );
}
 
export default Card;