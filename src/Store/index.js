import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// <------- Context ------->
import { FirebaseContext } from './FirebaseContext';
import { Firebase } from '../Firebase/config';

ReactDOM.render(
<FirebaseContext.Provider value={Firebase} >
<App />
</FirebaseContext.Provider>
, document.getElementById('root'));