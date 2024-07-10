import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// <------- Context ------->
import Context, { FirebaseContext } from './Store/Context';
import { Firebase } from './Firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<FirebaseContext.Provider value={{Firebase}} >
<Context>
{/* In this case App is child of Component Context. So we can access Context in App */}
<App />
</Context>
</FirebaseContext.Provider>
);