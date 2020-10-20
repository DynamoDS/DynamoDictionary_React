import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import ActionGrade from 'material-ui/svg-icons/action/grade';


const IconButtonExampleTouch = () => (
  <div>
    <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
      <img src="images/icons/pr_invert.png" id='prLogo' width= '40px' alt="prIcon" style={{'padding':'10px', 'paddingTop':'5px'}}/>
    </IconButton>
    <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
      <ActionGrade />
    </IconButton>
  </div>
);

export default IconButtonExampleTouch;
