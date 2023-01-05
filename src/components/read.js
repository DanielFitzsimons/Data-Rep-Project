import React from "react";
import { CDs } from "./cds";
import axios from "axios";



export class Read extends React.Component{
    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

   componentDidMount(){
    axios.get('http://localhost:4000/api/cds')
    .then((response) => {
        this.setState({ cds: response.data })
    })
    .catch((error) =>{
        console.log(error);
    })
   }

    state = {
        cds: [ ]
    }

    render(){
        return(
            <div>
                <h3>Showing Data from CD database</h3>
                <CDs cds={this.state.cds} ReloadData={this.componentDidMount}></CDs>
            </div>
        );
    }
}