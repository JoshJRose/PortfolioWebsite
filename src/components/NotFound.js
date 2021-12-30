import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found p-28"> 
            <div>not found</div> 
            <Link to="/" className="text-xl"></Link>
        </div>
    );
}
 
export default NotFound;