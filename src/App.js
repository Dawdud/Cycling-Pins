
import Home from './Views/home';
import UserProvider from "./providers/UserProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />

      </UserProvider>

    </div>
  );
}

export default App;
