import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './routes/home';
import Search from './routes/search';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import React, { useState } from "react";
import './App.css';

function App() {
  /* ↓state変数「text」を定義 */
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/"><h1 className="top-title">蔵書検索アプリ LIB</h1></Link>
        

        <div className="container-fluid">
          <div className="header">
            <div className="row">

              <div className='col-1'>
                <img className="top-icon" src="settings-5666.svg" />
              </div>

              <div className='col-11'>
                <div className="input-group">
                  <input type="text" value={text} onChange={(event) => setText(event.target.value)} className="form-control" placeholder="キーワードを入力" />
                  <button className="btn btn-outline-success" onClick={onClickAddText} type="button" id="button-addon2"><i class="fas fa-search"></i> 検索</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="topSpace">


          <div class="container-fluid">

            <div className="row">
              <div className='col-md'></div>
              <div className="col-md-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="img1.png" alt="第1スライド" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                      <img src="img2.png" alt="第2スライド" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                      <img src="img3.png" alt="第3スライド" className="d-block w-100" />
                    </div>
                  </div>
                  <button type="button" className="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">前へ</span>
                  </button>
                  <button type="button" className="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">次へ</span>
                  </button>
                </div>
              </div>
              <div className='col-md'></div>
            </div>




            <div className="row">
              <div className='col-md-6'>1-1</div>
              <div className='col-3'>1-2</div>
              <div className='col-3'>1-3</div>

            </div>
            <div class="row">
              <div className='col'>2行目 １列目</div>
            </div>
            <div class="row">
              <div className='col'>3行目 １列目</div>
            </div>
          </div>

        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <h1>{text}</h1>
          <h1>{addText}</h1>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={
            //ここでデータの受け渡し！
            <Search exText={addText} />
          } />
          <Route path="/contact" element={<Contact message="Hello Contact" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;