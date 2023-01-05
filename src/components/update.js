import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Update(){
    let{id} = useParams();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [price, setPrice] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/cd/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setArtist(response.data.artist);
            setPrice(response.data.price);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editCd= {
            title:title,
            artist:artist,
            price:price
        }

        axios.put('http://localhost:4000/api/cd/'+id, editCd)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit a CD</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit CD Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit CD Artist: </label>
                        <input type="text"
                            className="form-control"
                            value={artist}
                            onChange={(e)=>{setArtist(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit CD Price: </label>
                        <input type="text"
                            className="form-control"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Update CD"></input>
            </form>
        </div>
    );
}