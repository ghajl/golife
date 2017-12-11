import {loadData} from '../actions'
import Game from '../containers/Game'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NoSSR from 'react-no-ssr'
import HeaderSSR from '../components/HeaderSSR'
import withRedux from 'next-redux-wrapper'
import {withReduxSaga} from '../store'
import { compose, setDisplayName, pure, lifecycle, withProps } from 'recompose'
import configureStore from '../store'
import withRoot from '../components/withRoot';
import injectSheet from 'react-jss';
import stylesheet from '../static/rc-slider/index.css'

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


class Layout extends React.Component {

    constructor(props){
        super(props);
        this.state={
            screen: {},
        }

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
        this.setHeight(this.footer)
    };


    render () {
        return (
            <div className="App">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <NoSSR onSSR={<HeaderSSR />}>
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


