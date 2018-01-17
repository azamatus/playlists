import React from 'react';
import ReactDom from 'react-dom';
import  $ from 'jquery';
import '../css/app.scss';

$(document).ready(function () {
   ReactDom.render(
       <h1 className="react3">From React3</h1>,
       $('#root')[0]
   );
});