import GlobalStyle from "./GlobalStyle";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
