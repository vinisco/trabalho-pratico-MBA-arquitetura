import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";

import RefreshProvider from "./components/context/RefreshProvider.jsx";

function App() {
  return (
    <RefreshProvider>
      <Router>
        <Header />
        <Routes />
      </Router>
    </RefreshProvider>
  );
}

export default App;
