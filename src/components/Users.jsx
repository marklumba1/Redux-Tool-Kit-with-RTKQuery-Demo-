import "../assets/styles/card/card.css"
const UsersComponent = ({props}) => {
    console.log(props)
    return ( 
        <div className="card-container">
            <h4>{props.name}</h4>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>{props.address.suite} {props.address.street} {props.address.city}</p>
        </div>
     );
}
 
export default UsersComponent;