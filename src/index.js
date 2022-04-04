import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// With React Router, we no long need a centralized App component anymore
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import './index.css'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import rootReducer from './reducers'
//might be {}
const store = createStore(rootReducer,{},
  composeWithDevTools(
    applyMiddleware(
      )
      ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/api/posts" component={PostsIndex} />
                <Route exact path='/' component={PostsIndex}/>
            </div>
        </BrowserRouter>
   </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
