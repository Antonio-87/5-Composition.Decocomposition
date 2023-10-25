import "./App.css";
import Header from "./components/Header";
import Widget from "./components/Widget";

function App() {
  return (
    <>
      <Header title="header">
        <ul className="headers-hot-news">
          {["Сейчас в сми", " В Германии", "Рекомендуем"].map((elem, index) => {
            return (
              <li key={index}>
                <Widget className="header-hot-news" title={elem} />
              </li>
            );
          })}
        </ul>
      </Header>
    </>
  );
}

export default App;
