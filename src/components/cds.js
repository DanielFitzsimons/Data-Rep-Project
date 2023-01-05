import React from "react";
import { CdItem } from "./cdItem";

export class CDs extends React.Component{

    render(){
        return this.props.cds.map(
            (cd)=>{
                return <CdItem cd={cd} key={cd._id} Reload={this.props.Reload}>

                </CdItem>
            }
        );
    }
}