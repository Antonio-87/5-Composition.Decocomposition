import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Main from "./components/Main";
import Footer from "./components/Footer";
import headersFooter from "./assets/headersFooter";
import headersNavigator from "./assets/headersNavigator";
import listHotNews from "./assets/listHotNews";
import headersHotNews from "./assets/headersHotNews";

function App() {
  return (
    <>
      <Header title="header">
        <ul className="headers-hot-news">
          {headersHotNews.map((elem, index) => {
            return (
              <li key={index}>
                <Widget className="header-hot-news" title={elem} />
              </li>
            );
          })}
        </ul>
        <span className="header-hot-time">31 июля среда 02:32</span>
        <ul className="list-hot-news">
          {listHotNews.map((elem, index) => {
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
      <Main title="main">
        <nav>
          <ul className="headers-navigator">
            {headersNavigator.map((elem, index) => {
              return (
                <li key={index}>
                  <Widget className="header-navigator" title={elem} />
                </li>
              );
            })}
          </ul>
        </nav>
        <form action="" className="form" name="form">
          <label htmlFor="input">Яндекс</label>
          <input type="text" className="input" id="input" />
        </form>
        <span>
          Найдется все.Например <a href="#">фаза луны сегодня</a>
        </span>
        <img src="#" alt="poster" />
      </Main>
      <Footer title="footer">
        <Widget className="weather-footer" title="Погода">
          <img src="#" alt="иконка погоды" />
          <span>+17</span>
          <p>Утром +17</p>
          <p>Днем +20</p>
        </Widget>
        <ul className="headers-footer">
          {headersFooter.map((elem, index) => {
            return (
              <li key={index}>
                <Widget className="header-footer" title={elem.title}>
                  <ul className="news-footer">
                    {elem.news.map((elem, index) => {
                      return (
                        <li className="new-footer" key={index}>
                          <Widget
                            className="new"
                            title={elem.title}
                            srcImage={elem.srcImage}
                            source={elem.source}
                            date={elem.date}
                          ></Widget>
                        </li>
                      );
                    })}
                  </ul>
                </Widget>
              </li>
            );
          })}
        </ul>
      </Footer>
    </>
  );
}

export default App;
