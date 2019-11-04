import React from 'react';
import { withRouter, browserHistory } from 'react-router';

import ErrorOperationFailedHTML from './error_pages/OperationFailType1.html' 
import ErrorMethodNotFoundHTML from './error_pages/kMethodNotFound.html'
import ErrorIndexOutOfRangeHTML from './error_pages/kIndexOutOfRange.html'
import ErrorDeprecatedHTML from './error_pages/Deprecated.html'
import ErrorUnhandledExceptionHTML from './error_pages/UnhandledException.html'

import ErrorCustomNodeNotLoadedHTML from './error_pages/CustomNodeNotLoaded.html'
import ErrorConvertArrayToNonArrayHTML from './error_pages/kConvertArrayToNonArray.html'
import ErrorPropertyOfClassNotFoundHTML from './error_pages/kPropertyOfClassNotFound.html'
import ErrorRunCompletedWithWarningsHTML from './error_pages/RunCompletedWithWarningsMessage.html'
import ErrorExcelNotInstalledHTML from './error_pages/ExcelNotInstalled.html'

import CommonErrorMessagesHTML from './error_pages/CommonErrorMessages.html'


const containerStyle = {
	padding: 20
};


const contentSwitch = function(path) {

	if (path.endsWith('OperationFailed')) {
		return ErrorOperationFailedHTML
	} else if (path.endsWith('MethodNotFound')) {
		return ErrorMethodNotFoundHTML
	} else if (path.endsWith('IndexOutOfRange')) {
		return ErrorIndexOutOfRangeHTML
	} else if (path.endsWith('Deprecated')) {
		return ErrorDeprecatedHTML
	} else if (path.endsWith('UnhandledException')) {
		return ErrorUnhandledExceptionHTML
	} else if (path.endsWith('CustomNodeNotLoaded')) {
		return ErrorCustomNodeNotLoadedHTML
	} else if (path.endsWith('ConvertArrayToNonArray')) {
		return ErrorConvertArrayToNonArrayHTML
	} else if (path.endsWith('PropertyOfClassNotFound')) {
		return ErrorPropertyOfClassNotFoundHTML
	} else if (path.endsWith('RunCompletedWithWarnings')) {
		return ErrorRunCompletedWithWarningsHTML
	} else if (path.endsWith('ExcelNotInstalled')) {
		return ErrorExcelNotInstalledHTML
	} else {
	 	return CommonErrorMessagesHTML
	}
}

class CommonErrorMessagesContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = { path: props.location.pathname };
	}

	componentDidMount() {
		this.unlisten = browserHistory.listen(location =>  {
			this.setState({path: location.hash});
		});
	}

	componentWillUnmount() {
		this.unlisten();
	}

	render() {
		return <div style={containerStyle} 
			dangerouslySetInnerHTML={{__html: contentSwitch(this.state.path)}} />
	}
}

export default withRouter(CommonErrorMessagesContainer);
