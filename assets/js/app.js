import React from 'react';
import ReactDom from 'react-dom';
import '../css/app.scss';

$(document).ready(function () {
   ReactDom.render(
       <h1 className="react3">From React6</h1>,
       $('#root')[0]
   );
});