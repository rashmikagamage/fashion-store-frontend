import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios').default;

export default class addCatergory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: "mCatergory",
            mCat: [
                { id: "1", Catergory: "Male" },
                { id: "2", Catergory: "Female" },
                { id: "3", Catergory: "Kids" },
                {id : "4", Catergory: "Sports"},
                {id: "5", Catergory: "Special Discount"}
            ]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.addCat();
        alert("ADDED SUCCESSFULLY: ");
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addCat= async (user) =>{

        try{

            const data = user ;
            console.log('api data = ',data);
            const response = await axios.request({
                method: 'POST',
                url: `http://localhost:4000/api/addCatergories`,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
                },
                data: JSON.stringify(data),

            }).then((res) => {

                console.log('output',res);

                // console.log('out',res.data);

                // const result =  res.data;

                //return result;
            });

            // const resData = await response;

            // console.log('responsee api',resData);

            //return resData;



        }
        catch(e){
            console.log(e);
        }


    }

    render() {
        return (
            <form onSubmit={this.addCat}>
                <div className="form-group row">
                    Select Main Catergory
                    <br></br>
                    <select className="form-control">
                        {this.state.mCat.map(item => (
                            <option key={item.id} value={item.Catergory}>
                                {item.Catergory}
                            </option>
                        ))}
                        {console.log(this.state.mCat)}
                    </select>
                </div>

                <br></br>
                <div className="form-group">
                    <label>Add Subcatergory   </label>
                    <input
                        name="subCat"
                        className="form-control"
                        placeholder="--"
                        value = {this.state.subCat}
                        onChange= {this.onChangesubcat}/>
                </div>

                <input className="btn btn-primary" type="submit" value="ADD" />

            </form>

        );
    }
}
