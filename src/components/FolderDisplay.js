import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const FolderDisplay = () => {
    const { id } = useParams()
    const { data: folder, isPending, error } = useFetch('http://localhost:8000/folders/' + id);


    return ( 
    <div className="folder-display p-28">
        { isPending && <div> loading... </div> }
        { error && <div> {error} </div> }
        { folder && (
            <div> this is the {folder.title} folder</div>
        )}
    </div>
     );
}
 
export default FolderDisplay;