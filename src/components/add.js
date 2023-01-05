import React from "react";
import axios from "axios";

export class Add extends React.Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCdTitle = this.onChangeCdTitle.bind(this);
        this.onChangeCdArtist = this.onChangeCdArtist.bind(this);
        this.onChangeCdPrice = this.onChangeCdPrice.bind(this);

        this.state = { 
            title: "",
            artist: "",
            price: "",
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button Clicked
        ${this.state.title},
        ${this.state.artist}
        ${this.state.price}`);

        const cd ={
            title:this.state.title,
            artist:this.state.artist,
            price:this.state.price
        }

        axios.post('http://localhost:4000/api/cds', cd)
        .then()
        .catch();

        this.setState({
            title:'',
            artist:'',
            price:''

        })
    }

    onChangeCdTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    onChangeCdArtist(e){
        this.setState({
            artist:e.target.value
        })
    }

    onChangeCdPrice(e){
        this.setState({
            price:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Add a new Cd to the shop</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Cd title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeCdTitle}/>

                </div>

                <div className="form-group">
                        <label>Add Cd Artist: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.artist}
                        onChange={this.onChangeCdArtist}/>

                </div>

                <div className="form-group">
                        <label>Add Cd Price: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.price}
                        onChange={this.onChangeCdPrice}/>

                </div>
               
               <input type="submit" value="ADD CD"/>

                </form>
            </div>
        );
    }


}