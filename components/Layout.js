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
// import dynamic from 'next/dynamic'
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
    // App: {
    //     display: 'flex',
    // flexDirection: 'column',
    //  minHeight: '100%',
    //  margin: 0,
    // },
    // Content: {
        
    //     flex: '1 0 auto',
    //     width: '100%',
    //     '&:after': {
    //             content: '""',
    //           display: 'block',
    //           // margin-top: var(--space);
    //           height: 0,
    //           visibility: 'hidden',
    //         }
    // },
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

// const DynamicComponentWithNoSSR = dynamic(
//   import('../containers/Game'),
//   { ssr: false }
// )


class Layout extends React.Component {

    constructor(props){
        super(props);
        this.state={
            screen: {},
        }
        // this.main = null;
        // this.push=null;

        this.setHeight = this.setHeight.bind(this);
    }




    componentDidMount(){
        // console.log(this.footer);
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
        // this.setHeight(this.footer)
    }
    setHeight(el) {
        if(!this.footer) this.footer = el;
        if(el && this.push && this.main){
            console.log("das")
                let {top: topFooter, bottom: bottomFooter} = el.getBoundingClientRect();
                let {top: topMain, bottom: bottomMain} = this.main.getBoundingClientRect();
                let heightMain = bottomMain - topMain;
                let heightFooter = bottomFooter - topFooter;
                let height = this.state.screen.height - Math.floor(heightFooter) - Math.floor(heightMain);
                if(height < 0){
                    this.push.style.height = 0;
                } else {
                    this.push.style.height = height + 'px';
                }
                // console.log(heightFooter)
                // console.log(bottomPush)
                
                // console.log(screen.height)
                // if (Math.floor(heightFooter) + Math.floor(heightPush) + Math.floor(topPush) <= screen.height){
                //  console.log("cc")
                //  push.style.height = screen.height - Math.floor(heightFooter) - Math.floor(topPush) + 'px';
                // } else {
                //  console.log("cc2")
                //  push.style.height = 0;
                // }
                // console.log(push.style.height)
                // console.log(screen.height)
            }
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
        // console.log(this.main)
        // console.log(this.push)
        this.setHeight(this.footer)
        // this.canvasBoard.height=((this.gridHeight + 1) * this.squareSize) * this.ratio;
    };


    render () {
        // console.log("ind")
        //         let glider = convert(text);
        // console.log(glider)
        const HeaderSSR1 = () => (<HeaderSSR />);
        // const HeaderSSR1 = () => ( 
        //        <div className={this.props.classes.navbar}>
        //         <HeaderSSR/>
        //     </div>);        
        return (
            <div className="App">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <NoSSR onSSR={<HeaderSSR1 />}>
                    <div className="Content">
                    
                    
                        <div className={this.props.classes.navbar}>
                            <Header url={this.props.url} screen={this.state.screen}/>
                        </div>
                   
                    <div>
                    {this.props.children}
                    </div>
                    </div>

                <div></div>
                <div>
                <Footer screen={this.state.screen}/>
                </div>
                </NoSSR>
                <style jsx global>{`
                    .App {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }
                    .Content {
                        flex: 1 0 auto; /* 2 */
                        // padding: var(--space) var(--space) 0;
                        width: 100%;
                    }
                `}</style>
            </div>
            )
    }
}

export default injectSheet(styles)(Layout)


