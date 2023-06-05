import "./App.css";
import Card from "./common/components/Card/card";
import CreatePost from "./common/components/CreatePost/createPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <CreatePost></CreatePost>
          <CreatePost></CreatePost> */}
          <Card></Card>
      </header>
    </div>
  );
}

export default App;
