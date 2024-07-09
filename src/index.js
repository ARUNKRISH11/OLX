import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// <------- Context ------->
import { FirebaseContext } from './Store/FirebaseContext';
import { Firebase } from './Firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FirebaseContext.Provider value={{Firebase}} >
<App />
</FirebaseContext.Provider>
);