import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';


class CollectClinicals extends React.Component{

    componentWillMount(){
        this.state={}

        axios.get("http://3.128.153.85:8080/clinicalservices/api/patients/"+this.props.match.params.patientId)
        .then(res=>{
            this.setState(res.data)
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const data={
            patientId: this.props.match.params.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }
        axios.post("http://3.128.153.85:8080/clinicalservices/api/clinicals/",data)
        .then(res=>{
            toast("Patient Data Saved Successfully",{autoClose:3000, position:toast.POSITION.BOTTOM_CENTER})
        })
    }

    render(){
        return (<div>
                <h2>Patient Details:</h2>
                First Name: {this.state.firstName}
                Last Name: {this.state.LastName}
                Age: {this.state.age}
                <h2>Patient Clinical Data:</h2>
                <form>
                    Clinical Entry Type <select onChange={(event)=>{this.componentName=event.target.value}}>
                    <option value="bp">Select One</option>
                        <option >Blood Pressure(Sys/Dys)</option>
                        <option value="hw">Height/Weight</option>
                        <option value="heartRate">Heart Rate</option>
                    </select>
                    Value:<input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}}/>
                    <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
                </form>
        </div>)
    }
}

export default CollectClinicals ;