import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from "react-router-dom"
import Firststep from './Firststep';
import Success from './success';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
ReactDOM.render(
    <BrowserRouter>
      <Route exact path='/' component={Firststep}/>
      <Route exact path='/success' component={Success} />
          </BrowserRouter>    
    ,document.getElementById('root')
);
