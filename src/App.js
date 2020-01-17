import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/HeaderComponent";
import Headline from "./Headlines/Headline";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./bootstrapdemo.css";
function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Headline header="Posts" description="Click Button to render Posts" />
      </div>
      <hr></hr>
      <div>
        <header>
          <h5> bootstrap demo</h5>
        </header>
        <div className="container">
          <div className="row">
            <aside className="col-sm-2"> col 1 </aside>
            <section className="col-sm-8">col 2 </section>
            <aside className="col-sm-2"> col 3 </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
