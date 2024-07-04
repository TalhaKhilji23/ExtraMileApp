import React, {useState} from 'react';
import Root from './src/navigation/Root';
import DrawerRoot from './src/navigation/DrawerRoot';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';
import AdminMainRoot from './src/navigation/admin/AdminMainRoot';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const adminMail = 'admin@gmail.com';
  onAuthStateChanged(auth, user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
  return authenticated ? auth.currentUser.email === adminMail ? <AdminMainRoot /> : <DrawerRoot /> : <Root />;
};

export default App;
