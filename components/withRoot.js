//from next.js examples
import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import getContext from '../styles/getContext';

// Apply some reset
const styles = theme => ({

    '@global': {
        html: {
            background: 'white',
            height: '100%',
            fontSize: '14px',
        },
        body: {
            
            fontFamily: 'Century Gothic', 
            fallbacks:{
                fontFamily: 'sans-serif',
            }, 
            margin: 0,     
            display: 'flex',
            'flex-direction': 'column',
            height: '100%',
            '& > div:first-child': {
                height: '100%',
                flex: '1 0 auto',
                '& > div': {
                    '&:first-child': {
                        height: '100%',
                        '& > div': {
                            height: '100%',
                        }
                    }
                }
            }
        },

        a: {
            'text-decoration': 'none !important',
            outline: 'none',
        },
    },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

function withRoot(BaseComponent) {
  class WithRoot extends Component {
    static getInitialProps(ctx) {
        if (BaseComponent.getInitialProps) {
            return BaseComponent.getInitialProps(ctx);
        }

        return {};
    }

    componentWillMount() {
        this.styleContext = getContext();
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {

        return (
        
            <MuiThemeProvider
                theme={this.styleContext.theme}
                sheetsManager={this.styleContext.sheetsManager}
            >
                <AppWrapper>
                    <BaseComponent {...this.props} />
                </AppWrapper>
            </MuiThemeProvider>
        
        );
    }
  }

    if (process.env.NODE_ENV !== 'production') {
        WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
    }

    return WithRoot;
}

export default withRoot;