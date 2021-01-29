import logo from './logo.svg';
import './App.css';

import { Switch,Route } from 'react-router-dom';


import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import ChartGenerator from './components/ChartGenerator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/patientDetails/:patientId" component={CollectClinicals}/>
        <Route exact path="/addPatient" component={AddPatient}/>
        <Route exact path="/analyze/:patientId" component={AnalyzeData}/>
        <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator}/>
      </Switch>
    </div>
  );
}

export default App;
