import React, {Component} from "react";
import "./app.scss";
import PersistentDrawerLeft from './menu'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../reducers';
class App extends Component{
   render() {
       return (
           <Provider store={createStore(reducers)}>
               <PersistentDrawerLeft />
           </Provider>
       );
   }
}
export default App;
