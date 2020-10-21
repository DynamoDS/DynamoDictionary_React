import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function EditButton(props) {

    function editExampleFile(node){
      props.turnOnModal(props.index);
    }
    return (
      <IconButton tooltip='Edit Example File' touch={true} tooltipPosition="top-center" style={{"top":"-6px","opacity":" 0.5", 'padding':'0', 'width':"30px", 'height':'30px', 'marginTop':'0px', 'marginRight':'0px'}}  className='pull-right' onClick={()=>editExampleFile(props.node)}>
              <img alt='edit icon' height="20px" src="images/icons/edit.svg" />
              </IconButton>
        )
    }

export default EditButton;
