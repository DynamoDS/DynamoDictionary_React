import React from 'react';
import { hashHistory, withRouter, browserHistory } from 'react-router';
import classNames from 'classnames';

const LABEL_LENGTH = 30;
const BASE_PATH = "CommonErrorMessages";

const buttonStyle = {
    paddingLeft: 20, 
    paddingRight: 20
};

const pathIsActive = (currentPath, itemPath) => currentPath.includes(itemPath);


class CommonErrorMessagesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isActive: pathIsActive(this.props.path, this.props.section.path) };   
    }

    componentDidMount() {
        this.unlisten = browserHistory.listen(location =>  {
            this.setState({isActive: pathIsActive(location.hash, this.props.section.path)});
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const groupClasses = classNames('button', 'accordion', 'button2', 
            {'active': this.state.isActive})

        return (
            <div>
                <button 
                    className={groupClasses} 
                    style={buttonStyle}
                    onClick={() => hashHistory.push(this.props.section.path)}>
                    {this.props.section.name}
                </button> 
                {this.state.isActive ? (<div>
                    { this.props.section.children.map((item, i) => {

                        const buttonClasses = classNames('button', 'accordion', 'button4',
                            {'active': pathIsActive(this.props.path, item.id)})

                        return (<div key={i}> 
                            <button 
                                className={buttonClasses} 
                                style={buttonStyle}
                                onClick={() => hashHistory.push(this.props.section.path + item.id)}>
                                { item.name.length > LABEL_LENGTH ?
                                    item.name.substring(0, LABEL_LENGTH) + "..." : item.name }
                            </button>
                        </div>)
                    })
                }
                </div>) : null
                }
            </div>
        )
    }
}


class CommonErrorMessagesButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        isActive: pathIsActive(props.location.pathname, BASE_PATH),
        errorSectionItems: []
     };
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location =>  {
        this.setState({isActive: pathIsActive(location.hash, BASE_PATH)});
    });

    fetch('data/Dynamo_Error_Messages.json')
        .then((res) => res.json())
        .then((res) => this.setState({errorSectionItems: res}));
  }

  componentWillUnmount() {
        this.unlisten();
  }

  render() {
    const classes = classNames('button', 'accordion', 'button1', 
        {'active': this.state.isActive})

    return (
        <div>
            <button 
                className={classes} 
                style={buttonStyle}
                onClick={() => hashHistory.push(BASE_PATH)}>
                Common Error Messages
            </button> 
            {this.state.isActive ? 
                (<div>
                    { this.state.errorSectionItems.map((item, i) => <CommonErrorMessagesSection 
                        key={i} section={item} path={this.props.location.pathname}/>) }
                </div>) 
                : null
            }
        </div>
    );
  }
}

export default withRouter(CommonErrorMessagesButton);
