import React from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component{

    state = {
        patientData:[]
    }

    componentWillMount(){
        axios.get('http://3.128.153.85:8080/clinicalservices/api/patients/').then(res=>{
            const patientData=res.data;
            this.setState({patientData})
        })
    }

    render(){
        return (<div>
            <h2>Patient:</h2>
            <table align='center'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.patientData.map(patient=><RowCreator item={patient}/>)}
                </tbody>
            </table>
            <Link to={'/addPatient'}><font size="5" >Register Patient</font></Link>
        </div>)
    }
}


class RowCreator extends React.Component{
    render(){
        var patient =  this.props.item;
        return <tr>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'patientDetails/'+patient.id}>Add Data</Link></td>
            <td><Link to={'analyze/'+patient.id}>Analyze</Link></td>
        </tr>
    }
}

export default Home;