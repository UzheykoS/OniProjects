import * as React from 'react'
import { Nav } from "../components/Nav";
import { Tabs } from "../utils/Helper"
import { Carousel } from 'react-responsive-carousel';
import { preloadImages, loadMainPageImage } from "../utils/Helper";
import { Busy } from '../components/Busy';

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
            backgroundImage: "./images/images_large/main.jpg",
            activeImage: 0,
            loading: true
        }
    }

    async componentDidMount() {
        this.timer = setInterval(this.changeBackgroundImage, 5000);

        // preloads the rest
        // loadCakes(() => { })
        await loadMainPageImage("./images/images_large/main.jpg");

        this.setState({
            loading: false
        });
        await preloadImages([
            "./images/images_large/cakes/cake1.jpg",
            "./images/images_large/cakes/cake2.jpg",
            "./images/images_large/cakes/cake3.jpg",
            "./images/images_large/cakes/cake4.jpg",
            "./images/images_large/cakes/cake5.jpg",
            "./images/images_large/cakes/cut1.jpg",
            "./images/images_large/cakes/cut2.jpg",
            "./images/images_large/cakes/cut3.jpg",
            "./images/images_large/cakes/cut4.jpg",
            "./images/images_large/cakes/cut5.jpg",
            "./images/images_large/macarons/macaron1.jpg",
            "./images/images_large/macarons/macaron2.jpg",
            "./images/images_large/macarons/macaron3.jpg",
            "./images/images_large/macarons/macaron4.jpg",
            "./images/images_large/macarons/macaron5.jpg",
            "./images/images_large/macarons/macaron6.jpg",
            "./images/images_large/macarons/macaron7.jpg",
            "./images/images_large/macarons/macaron8.jpg",
            "./images/images_large/main.jpg",
            "./images/images_large/main2.jpg",
            "./images/images_large/main3.jpg",])
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    changeBackgroundImage = () => {
        const { backgroundImage } = this.state;
        
        if (backgroundImage == "./images/images_large/main.jpg") {
            this.setState({
                backgroundImage: "./images/images_large/main2.jpg",
                activeImage: 1
            });
        }
        else if (backgroundImage == "./images/images_large/main2.jpg") {
            this.setState({
                backgroundImage: "./images/images_large/main3.jpg",
                activeImage: 2
            });
        }
        else if (backgroundImage == "./images/images_large/main3.jpg") {
            this.setState({
                backgroundImage: "./images/images_large/main.jpg",
                activeImage: 0
            });
        }
    }

    render() {
        const { backgroundImage, activeImage, loading } = this.state;

        return <div className="app background">
        {/* return <div className="app background" style={{ backgroundImage: `url(${backgroundImage})`}}> */}
            <Nav tab={Tabs.Main} />
            <img className="background-img" src="./images/images_large/main.jpg" style={{ opacity: activeImage == 0 ? 1 : 0 }} />
            <img className="background-img" src="./images/images_large/main2.jpg" style={{ opacity: activeImage == 1 ? 1 : 0 }}/>
            <img className="background-img" src="./images/images_large/main3.jpg" style={{ opacity: activeImage == 2 ? 1 : 0 }}/>

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
                    <img className="social_network" src="images/icons/facebook.png" />
                </a>
                <a target="_blank" href="https://www.instagram.com">
                    <img className="social_network" src="images/icons/instagram.png" />
                </a>
                <a target="_blank" href="https://www.telegram.com">
                    <img className="social_network" src="images/icons/twitter.png" />
                </a>
            </div>
            <Busy loading={loading} />
        </div>;
    }
};