import React from 'react';
import { render } from 'react-dom';
import '../css/app.scss';
import Tracks from './tracks';

$(document).ready(function () {
   render(
       <Tracks />,
       $('#root')[0]
   );
});