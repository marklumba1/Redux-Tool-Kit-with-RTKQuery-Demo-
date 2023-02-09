import { useGetPostsQuery } from "../app/apiSlice";
import "../assets/styles/home/home.css";
import Card from "../components/Card";


const Home = () => {
    const {data,isLoading,isSuccess,isError,error} = useGetPostsQuery()
    return ( 
        <div className="home-container">
            {isLoading && <div className="loader">Loading Posts...</div>}
            {data && !isLoading && 
            <div className="cards-container">
                {data.map(post => <Card props={post}/>)}
            </div>
            }
        </div>

     );
}
 
export default Home;