import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo />
      <Form />
      <UserList />
    </div>
  );
}

export default App;
