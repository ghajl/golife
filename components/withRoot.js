/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import getContext from '../styles/getContext';

// Apply some reset
const styles = theme => ({
    '@global': {
        html: {
            background: 'white',
            // WebkitFontSmoothing: 'antialiased', // Antialiasing.
            // MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            height: '100%',
            fontSize: '14px',
        },
        body: {
            
            fontFamily: 'Century Gothic', 
            fallbacks:{
                fontFamily: 'sans-serif',
            },      
              // font: 14px "Century Gothic", Futura, sans-serif;
              // height: '100%',
            margin:0,
            paddingTop: '60px', 
        },
        a: {
            'text-decoration': 'none !important',
            outline: 'none',
        },
        ol: {
            paddingLeft: '30px',

          
        },
        ul: {
            paddingLeft: '30px',

          
        },
        label: {
            fontWeight: 'normal !important',
        },
    navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
         'z-index': 3,
        backgroundColor:"#fff",
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