import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { Carousel } from 'react-responsive-carousel';
import { preloadImages, loadMainPageImage } from "../Helper";
import { Busy } from './Busy';

interface IMainState {
    backgroundImage?: string;
    activeImage?: number;
    loading?: boolean;
}

export class Main extends React.Component<any, IMainState>{
    private timer: any;

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "../images/main.jpg",
            activeImage: 0,
            loading: true
        }
    }

    async componentDidMount() {
        this.timer = setInterval(this.changeBackgroundImage, 5000);

        // preloads the rest
        // loadCakes(() => { })
        await loadMainPageImage("./images/main.jpg");

        this.setState({
            loading: false
        });
        await preloadImages([
            "./images/cake1.jpg",
            "./images/cake2.jpg",
            "./images/cake3.jpg",
            "./images/cake4.jpg",
            "./images/cake5.jpg",
            "./images/cut1.jpg",
            "./images/cut2.jpg",
            "./images/cut3.jpg",
            "./images/cut4.jpg",
            "./images/cut5.jpg",
            "./images/macaron1.jpg",
            "./images/macaron2.jpg",
            "./images/macaron3.jpg",
            "./images/macaron4.jpg",
            "./images/macaron5.jpg",
            "./images/macaron6.jpg",
            "./images/macaron7.jpg",
            "./images/macaron8.jpg",
            "./images/main.jpg",
            "./images/main2.jpg",
            "./images/main3.jpg",])
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    changeBackgroundImage = () => {
        const { backgroundImage } = this.state;
        
        if (backgroundImage == "../images/main.jpg") {
            this.setState({
                backgroundImage: "../images/main2.jpg",
                activeImage: 1
            });
        }
        else if (backgroundImage == "../images/main2.jpg") {
            this.setState({
                backgroundImage: "../images/main3.jpg",
                activeImage: 2
            });
        }
        else if (backgroundImage == "../images/main3.jpg") {
            this.setState({
                backgroundImage: "../images/main.jpg",
                activeImage: 0
            });
        }
    }

    render() {
        const { backgroundImage, activeImage, loading } = this.state;

        return <div className="app background">
        {/* return <div className="app background" style={{ backgroundImage: `url(${backgroundImage})`}}> */}
            <Nav tab={Tabs.Main} />
            <img className="background-img" src="../images/main.jpg" style={{ opacity: activeImage == 0 ? 1 : 0 }} />
            <img className="background-img" src="../images/main2.jpg" style={{ opacity: activeImage == 1 ? 1 : 0 }}/>
            <img className="background-img" src="../images/main3.jpg" style={{ opacity: activeImage == 2 ? 1 : 0 }}/>

            <div className="main-body">
                {/* <div className="carousel-container">
                    <Carousel axis="horizontal"
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        infiniteLoop={true}
                        dynamicHeight emulateTouch>
                        <div className="cake-container">
                            <img src="./images/cake1.jpg" className="cake" />
                        </div>
                        <div className="cake-container">
                            <img src="./images/cake2.jpg" className="cake" />
                        </div>
                        <div className="cake-container">
                            <img src="./images/cake3.jpg" className="cake" />
                        </div>
                        <div className="cake-container">
                            <img src="./images/cake4.jpg" className="cake" />
                        </div>
                        <div className="cake-container">
                            <img src="./images/cake5.jpg" className="cake" />
                        </div>
                    </Carousel>
                </div> */}
            </div>

            <div className="socials">
                <a target="_blank" href="https://www.facebook.com/">
                    <img className="social_network" src="images/facebook.png" />
                </a>
                <a target="_blank" href="https://www.instagram.com">
                    <img className="social_network" src="images/instagram.png" />
                </a>
                <a target="_blank" href="https://www.telegram.com">
                    <img className="social_network" src="images/twitter.png" />
                </a>
            </div>
            <Busy loading={loading} />
        </div>;
    }
};