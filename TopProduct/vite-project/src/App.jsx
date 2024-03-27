// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductListPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
