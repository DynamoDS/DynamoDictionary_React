import React from 'react';
import { withRouter, browserHistory } from 'react-router';

const containerStyle = {
	padding: 20
};

const contentSwitch = function(path) {
	try {
		return require('./error_pages/' + path.split('/').pop() + '.html')
	} catch(error) {
		return require('./error_pages/CommonErrorMessages.html')
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
