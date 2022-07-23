import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import TotalCount from "./components/TotalCount";
import StageManeger from "./StageManeger";


function App() {
    return (
      <StageManeger>
        <div className="App">
            <div className="row">
                <Increment />
                <Decrement />
            </div>
            <div className="row">
                <TotalCount />
            </div>
        </div>
        </StageManeger>
    );
}

export default App;
