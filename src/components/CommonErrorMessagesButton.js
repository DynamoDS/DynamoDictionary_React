import React from 'react';
import { hashHistory, withRouter, browserHistory } from 'react-router';
import classNames from 'classnames';

const buttonStyle = {
    paddingLeft: 20, 
    paddingRight: 20
};

const sections = [
    {
        name: 'Scripting Errors',
        path: 'ScriptingErrors',
        children: [
            {
                name: 'Operation Failed',
                route: 'CommonErrorMessages/ScriptingErrors/OperationFailed'
            }, 
            {
                name: 'Deprecated',
                route: 'CommonErrorMessages/ScriptingErrors/Deprecated'
            },
            {
                name: 'Index Out of Range',
                route: 'CommonErrorMessages/ScriptingErrors/IndexOutOfRange'
            },
            {
                name: 'Method Not Found',
                route: 'CommonErrorMessages/ScriptingErrors/MethodNotFound'
            },
            {
                name: 'Unhandled Exception',
                route: 'CommonErrorMessages/ScriptingErrors/UnhandledException'
            }
        ]
    },
    {
        name: 'Other Errors',
        path: 'OtherErrors',
        children: [
            {
                name: 'Custom Node Not Loaded',
                route: 'CommonErrorMessages/OtherErrors/CustomNodeNotLoaded'
            }, 
            {
                name: 'Converted Array To Non Array',
                route: 'CommonErrorMessages/OtherErrors/ConvertArrayToNonArray'
            },
            {
                name: 'Property Of Class Not Found',
                route: 'CommonErrorMessages/OtherErrors/PropertyOfClassNotFound'
            },
            {
                name: 'Run Completed With Warnings',
                route: 'CommonErrorMessages/OtherErrors/RunCompletedWithWarnings'
            },
            {
                name: 'Excel Not Installed',
                route: 'CommonErrorMessages/OtherErrors/ExcelNotInstalled'
            }
        ]
    }
];

class CommonErrorMessagesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isActive: this.props.isActive };
        
    }

    componentDidMount() {
        this.unlisten = browserHistory.listen(location =>  {
            this.setState({isActive: location.hash.includes(this.props.section.path)});
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const classes = classNames('button', 'accordion', 'button2', 
            {'active': this.state.isActive})

        return (
            <div>
                <button 
                    className={classes} 
                    style={buttonStyle}
                    onClick={() => this.setState({ isActive: !this.state.isActive })}>
                    {this.props.section.name}
                </button> 
                {this.state.isActive ? (<div>
                    { this.props.section.children.map((item, i) => 
                        <div key={i}> 
                            <button 
                                className={'button accordion button3'} 
                                style={buttonStyle}
                                onClick={() => hashHistory.push(item.route)}>
                                {item.name}
                            </button>
                        </div>) }
                </div>) : null
                }
            </div>
        )
    }
}

class CommonErrorMessagesButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { isActive: props.location.pathname.includes('CommonErrorMessages') };
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location =>  {
        this.setState({isActive: location.hash.includes('CommonErrorMessages')});
    });
  }

  componentWillUnmount() {
        this.unlisten();
  }

  render() {
    const classes = classNames('button', 'accordion', 'button1', {'active': this.state.isActive})

    return (
        <div>
            <button 
                className={classes} 
                style={buttonStyle}
                onClick={() => this.setState({ isActive: !this.state.isActive })}>
                Common Error Messages
            </button> 
            {this.state.isActive ? 
                (<div>
                    { sections.map((item, i) => <CommonErrorMessagesSection 
                        key={i} section={item} 
                        isActive={this.props.location.pathname.includes(item.path)}/>) }
                </div>) 
                : null
            }
        </div>
    );
  }
}

export default withRouter(CommonErrorMessagesButton);
