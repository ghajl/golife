import React, { Component } from 'react';
import {loadData} from '../actions'
import Game from '../containers/Game'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderSSR from '../components/HeaderSSR'
import NoSSR from 'react-no-ssr'
import withRedux from 'next-redux-wrapper'
import {withReduxSaga} from '../store'
import { compose, setDisplayName, pure, lifecycle, withProps } from 'recompose'
import configureStore from '../store'
import withRoot from '../components/withRoot';
import injectSheet from 'react-jss';
import stylesheet from '../static/rc-slider/index.css'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

// // const Counter = compose(
// //     setDisplayName('IndexPage'),
// //     withProps({
// //         title: 'Index page',
// //         // linkTo: '/other'
// //     }),
// //     // lifecycle({
// //     //     componentDidMount () {
// //     //         this.timer = this.props.startClock()
// //     //     },
// //     //     componentWillUnmount () {
// //     //         clearInterval(this.timer)
// //     //     }
// //     // }),
// //     pure
// // )(Game)

// // Counter.getInitialProps = ({ store }) => {
// //     store.dispatch(loadData())
// // }

// // export default withRedux(configureStore, null, null)(Counter)
// const styles = {
//     // App: {
//     //     display: 'flex',
//     // flexDirection: 'column',
//     //  minHeight: '100%',
//     //  margin: 0,
//     // },
//     // Content: {
        
//     //     flex: '1 0 auto',
//     //     width: '100%',
//     //     '&:after': {
//     //             content: '""',
//     //           display: 'block',
//     //           // margin-top: var(--space);
//     //           height: 0,
//     //           visibility: 'hidden',
//     //         }
//     // },
//     navbar: {
//         overflow: 'hidden',
//         boxShadow: [0, 3, 15, -6, '#222'],
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//          'z-index': 3,
//         backgroundColor:"#fff",
//     },
//     main: {
//         marginTop: 30,
//         'z-index': 2,
//     }
// }

const DynamicComponentWithNoSSR = dynamic(
  import('../containers/Game')
)


// class Counter extends React.Component {

//     constructor(props){
//         super(props);
//         this.state={
//             screen: {},
//         }
        
//     }

//     static async getInitialProps ({store}) {
//         // console.log(store.getState().patterns.length)
//         if (store.getState().patterns.length === 0) {
//             store.dispatch(loadData())

//         }

//     }


//     componentDidMount(){
//         console.log("index");
//         window.addEventListener('resize', this.handleWindowSizeChange);
//         this.setState({
//             screen : {
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//                 ratio: window.devicePixelRatio || 1,
//               }
//         });
//     }

//     handleWindowSizeChange = () => {
//         this.setState({
//             screen : {
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//                 ratio: window.devicePixelRatio || 1,
//               }
//         });
//         //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
//         // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
//         console.log("vvv1")
//         // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
//     };


//     render () {
//         console.log("ind")
//         const HeaderSSR1 = () => (<HeaderSSR />);
//         // const HeaderSSR1 = () => ( 
//         //        <div className={this.props.classes.navbar}>
//         //         <HeaderSSR/>
//         //     </div>);        
//         return (
//             <div className={this.props.classes.App}>
//                 <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
//                     <div className={this.props.classes.Content}>
//                     <NoSSR onSSR={<HeaderSSR1 />}>
                    
//                         <div className={this.props.classes.navbar}>
//                             <Header url={this.props.url} screen={this.state.screen}/>
//                         </div>
//                     </NoSSR>

//                     <DynamicComponentWithNoSSR />
//                     </div>

//                 <NoSSR>
//                 <Footer screen={this.state.screen}/>
//                 </NoSSR>
//             </div>
//             )
//     }
// }


class Index extends Component {
    static async getInitialProps ({store}) {
    // console.log(store.getState().patterns.length)
    if (store.getState().patterns.length === 0) {
        store.dispatch(loadData())

    }}


    // console.log(props)
    render() {
        return (
            <Layout  url={this.props.url}>

                    <DynamicComponentWithNoSSR />
            </Layout>
            )
        }    
}


export default withReduxSaga(withRoot(Index))