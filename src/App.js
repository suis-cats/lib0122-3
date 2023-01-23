import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './routes/home';
import Search from './routes/search';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import React, { useState } from "react";

function App() {
  /* ↓state変数「text」を定義 */
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText(text);
    setText("");
    <Search ontext={text}/>
  }
  


  return (
    <div className="App">
      <BrowserRouter>
        <h1>蔵書検索アプリ LIB</h1>
        <div className="input-group">
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} className="form-control" placeholder="キーワードを入力" />
          
            <button className="btn btn-outline-success" onClick={onClickAddText} type="button" id="button-addon2"><i class="fas fa-search"></i> 検索</button>
          
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
          
          
          
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact message="Hello Contact" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;