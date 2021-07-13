import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";

const StyledTooltip = withStyles({
  popper: {
    top: "15px !important"
  },
  tooltipPlacementTop: {
    borderRadius: "2px",
    fontSize: "14px"
  }
})(Tooltip);

export default function ExampleAdd(props){
    return (
      <StyledTooltip title="Add Example File" placement="top" onClick={()=>{props.exAdd(props.node)}}>
        <IconButton size="medium">
          <img alt='add example file' src="images/icons/add.svg" style={{width: "40px"}} />
        </IconButton>
      </StyledTooltip>
    );
}
