//next.js examples
import React, { Component } from 'react';
import {loadData} from '../actions'
import About from '../containers/About'
import {withReduxSaga} from '../store'
import withRoot from '../components/withRoot';
import Layout from '../components/Layout'


class AboutPage extends Component {
  static async getInitialProps ({store}) {
    if (store.getState().patterns.length === 1) {
        store.dispatch(loadData())
  }}

  render() {
    return (
      <Layout  url={this.props.url}>
        <About />
      </Layout>
    )   
  } 
}

export default withReduxSaga(withRoot(AboutPage))