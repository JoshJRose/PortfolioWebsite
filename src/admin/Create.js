import { useState } from "react/cjs/react.development";

const Create = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [isPending, setIsPending]  = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const folder = {name, description, images};

        setIsPending(true);

        fetch('http://localhost:8000/folders', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(folder)
        }).then (() => {
            console.log('added blog');
            setIsPending(false);
        })
    }

    return ( 

        <div className="create p-28">
            <div>add a folder</div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Description</label>
                <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>

                <label>Images</label>
                <input type="image" required value={images} onChange={(e) => setImages(e.target.value)}/>

                { !isPending && <button>submit</button>}
                { isPending && <button disabled >loading...</button>}

            </form>
        </div>
     );
}
 
export default Create;