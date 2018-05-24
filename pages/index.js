//next.js examples
import React, { Component } from 'react';
import {loadData} from '../actions'
import {withReduxSaga} from '../store'
import withRoot from '../components/withRoot';
import Layout from '../components/Layout'
import Main from '../containers/Main';

class Index extends Component {
    static async getInitialProps ({store}) {
        if (store.getState().patterns.length === 0) {
            store.dispatch(loadData())
    }}

    render() {
        return (
            <Layout  url={this.props.url}>
                <Main />
            </Layout>
            )
        }    
}


export default withReduxSaga(withRoot(Index));