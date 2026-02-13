import "./App.css";
//import { ListeCarros } from "./components/ListeCarros";
import { MyForm } from "./components/MyForm";

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Pasquale",
          email: "pasqualenetto@gmail.com",
          bio: "Sou um estudante de React",
          role: "user",
        }}
      />
    </>
  );
}

export default App;
