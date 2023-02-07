import React, { createContext } from 'react';
import './App.css';


import Context from './Component/UseContext';
import AddEffect from './Component/UseEffect';
import Add from "./Component/UseState";
import Redux from "./Component/Redux";
import Home from "./Component/Pages/Home";
import Users from './Component/Pages/Users';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, useParams } from 'react-router-dom';
// import {mystore} from "./Component/Store/Index";
import myreducer from './Component/Store/Index';
import Userreducer from "./Component/Reducer/UserReducer";
import { Provider } from 'react-redux';
import Parent from "./Component/Props/Parent";
import Child from "./Component/Props/Child";
import FunctionApi from './Component/API/FunctionApi';
import ClassApi from './Component/API/ClassApi';
import Event from "./Component/ClassComponent/EventListenber";
import List from "./Component/Function Component/EventListener";
import Ref from './Component/UseRef';
import Load from "./Component/LoadDataOnlyOnce";
import ApiCall from "./Component/API/Axios";
import Main from "./Component/Pagination/Main";
import Callback from "./Component/UseCallback";

// const store =createStore(myreducer);


export const UserContext = createContext();

function App() {

  const mystore = createStore(Userreducer);
  const store = createStore(myreducer);
  return (

    <div className="App">
      <Provider store={store} >
        <UserContext.Provider value={'vijay'}>
          {/* <Router>
              <Switch>
          {/* <Context/> */}
          {/* <Add/> */}
          {/* <AddEffect/> */}

          <BrowserRouter>
            <Router>
              <Route />
            </Router>
          </BrowserRouter>


          {/* <Route path="/users" component={Users}/>
          <Route path="/" component={Home}/> */}
          {/* </Switch>
          </Router> */}
          {/* <Parent/>  */}
          {/* <Child/> */}
          {/* <FunctionApi/> */}
          {/* <ApiCall/> */}

          {/* <Main/> */}
          <Callback/>

          {/* <Event/>    */}
          {/* <Redux/> */}
          
          {/* <ClassApi /> */}
          {/* <Add/>  */}
          {/* <List/> */}
          {/* <Ref/> */}
          {/* <Load/> */}
        </UserContext.Provider>
      </Provider>
    </div>

  );
}

export default App;
