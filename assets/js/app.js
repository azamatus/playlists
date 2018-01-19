import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../css/app.scss';
import Tracks from './tracks';
import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
$(document).ready(function () {
   render(
       <Provider store={store}>
            <Tracks />
       </Provider>,
       $('#root')[0]
   );
});