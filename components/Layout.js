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
    }
    handleWindowSizeChange = () => {
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              }
        });
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
                        flex: 1 0 auto; 
                        width: 100%;
                    }
                `}</style>
            </div>
            )
    }
}

export default injectSheet(styles)(Layout)


