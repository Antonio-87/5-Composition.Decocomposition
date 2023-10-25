import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
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
      <Sidebar className="offer">
        <img className="offer-icon" src="#" alt="icon" />
        <a className="offer-header" href="#">
          Работа над ошибками
        </a>
        <p className="offer-text">Смотрите на Яндексе и запоминайте</p>
      </Sidebar>
    </>
  );
}

export default App;
