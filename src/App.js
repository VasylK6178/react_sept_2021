import './App.css';

import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <div>
      <div className="Apper">
          <div className="First"><Users/></div>
          <hr/>
          <div className="Second"><Posts/></div>
      </div>
        <hr/>
      <div>
          <div className="Third"><Comments/></div>
      </div>

    </div>
  );
}

export default App;
