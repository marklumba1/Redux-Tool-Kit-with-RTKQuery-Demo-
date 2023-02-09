import { useGetUsersQuery } from "../app/apiSlice";
import "../assets/styles/home/home.css";

import UsersComponent from "../components/Users";

const Users = () => {
    const {data,isLoading,isSuccess,isError,error} = useGetUsersQuery()
    console.log(data)
    return ( 
        <div className="home-container">
            {isLoading && <div className="loader">Loading Users...</div>}
            {data && !isLoading && 
            <div className="cards-container">
                {data.map(user => <UsersComponent key={user.id} props={user}/>)}
            </div>
            }
        </div>

     );
}
 
export default Users;