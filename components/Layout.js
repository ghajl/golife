import Game from './Game'
import Header from './Header'
import Footer from './Footer'
import NoSSR from 'react-no-ssr'
import HeaderSSR from './HeaderSSR'
import stylesheet from '../static/rc-slider/index.css'
import Head from 'next/head'


class Layout extends React.Component {

    constructor(props){
        super(props);
        this.state={
            screen: {},
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
    };


    render () {
        return (
            <div className="App">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <NoSSR onSSR={<HeaderSSR />}>
                        <Head>
                            <title>Project Conway`s Game Of Life</title>
                            <link rel='icon' type='image/x-icon' href='/static/livecell.ico'/>
                        </Head>
                        <div className="Navbar">
                            <Header url={this.props.url} screen={this.state.screen}/>
                        </div>
                        <div className="Content">
                            {this.props.children}
                        </div>

                        <Footer screen={this.state.screen}/>
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
                    .Navbar {
                        overflow: hidden;
                        box-shadow: 0 3px 15px -6px #222;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 3;
                        background-color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}

export default Layout


