import React, { Component } from 'react';
import {loadData} from '../actions'
import Game from '../containers/Game'
import {withReduxSaga} from '../store'
import withRoot from '../components/withRoot';
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'



const DynamicComponentWithNoSSR = dynamic(
    import('../containers/Game')
)





class Index extends Component {
    static async getInitialProps ({store}) {
    if (store.getState().patterns.length === 0) {
        store.dispatch(loadData())

    }}

    render() {
        
        return (
            <Layout  url={this.props.url}>
                    <DynamicComponentWithNoSSR />
            </Layout>
            )
        }    
}


export default withReduxSaga(withRoot(Index))