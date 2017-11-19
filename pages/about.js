import {loadData} from '../actions'
// import About from '../containers/About'
import Header from '../components/Header'
import HeaderSSR from '../components/HeaderSSR'
import NoSSR from 'react-no-ssr'
import withRedux from 'next-redux-wrapper'
import {withReduxSaga} from '../store'
import { compose, setDisplayName, pure, lifecycle, withProps } from 'recompose'
import configureStore from '../store'
import withRoot from '../components/withRoot';
import injectSheet from 'react-jss';
import stylesheet from '../statics/rc-slider/index.css'
import dynamic from 'next/dynamic'
// const Counter = compose(
//     setDisplayName('IndexPage'),
//     withProps({
//         title: 'Index page',
//         // linkTo: '/other'
//     }),
//     // lifecycle({
//     //     componentDidMount () {
//     //         this.timer = this.props.startClock()
//     //     },
//     //     componentWillUnmount () {
//     //         clearInterval(this.timer)
//     //     }
//     // }),
//     pure
// )(Game)

// Counter.getInitialProps = ({ store }) => {
//     store.dispatch(loadData())
// }

// export default withRedux(configureStore, null, null)(Counter)
const styles = {
    navbar: {
        overflow: 'hidden',
        boxShadow: [0, 3, 15, -6, '#222'],
        position: 'fixed',
        top: 0,
        width: '100%',
         'z-index': 3,
        backgroundColor:"#fff",
    },
    main: {
        marginTop: 30,
        'z-index': 2,
    }
}

const DynamicComponentWithNoSSR = dynamic(
  import('../containers/About'),
  { ssr: false }
)


class AboutPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            screen: {},
        }
// console.log(props);
    }

    static async getInitialProps ({store}) {
        console.log(store.getState().patterns.length)
        if (store.getState().patterns.length === 0) {
            store.dispatch(loadData())

        }

    }


    componentDidMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
    }

    handleWindowSizeChange = () => {
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
        //         this.canvasBoard.width=((this.gridWidth + 1) * this.squareSize) * this.ratio;
        // console.log(`${this.gridWidth} + ${this.squareSize} * ${this.state.screen.ratio}`)
        console.log("vvv1")
        // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
    };


    render () {
        console.log("ind")
        const HeaderSSR1 = () => (<HeaderSSR />);
        // const HeaderSSR1 = () => ( 
        //        <div className={this.props.classes.navbar}>
        //         <HeaderSSR/>
        //     </div>);
        
        return (
            <div>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <NoSSR onSSR={<HeaderSSR1 />}>
            <div className={this.props.classes.navbar}>
                <Header url={this.props.url} screen={this.state.screen}/>
            </div>
            </NoSSR>

            <DynamicComponentWithNoSSR />
            
            </div>
            )
    }
}

export default withReduxSaga(withRoot(injectSheet(styles)(AboutPage)))