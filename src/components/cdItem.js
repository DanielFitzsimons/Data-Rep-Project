import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export class CdItem extends React.Component{
    constructor()
    {
        super();
        this.DeleteCd = this.DeleteCd.bind(this);
    }

    DeleteCd(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/cd/'+this.props.cd._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }

    render(){
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.cd.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {this.props.cd.artist}
                            <footer>
                                {this.props.cd.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/update/'+this.props.cd._id} className="btn btn-primary">Update</Link>
                    <Button variant="danger" onClick={this.DeleteCd}>Delete</Button>
                </Card>
            </div>
        );
    }
}