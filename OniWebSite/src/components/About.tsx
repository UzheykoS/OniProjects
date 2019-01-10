import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { Busy } from './Busy';

interface IAboutState {
    loading?: any;
    height?: string;
}

export class About extends React.Component<any, IAboutState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            height: '0px'
        }
    }

    onImageLoaded = () => {
        this.setState({
            loading: false,
            height: 'auto'
        });
    }

    render() {
        const { loading, height } = this.state;

        return <div className="about-container">
            <Nav tab={Tabs.About} />
            <div className="about-header">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-photo" style={{ height: height }} >
                            <img src="./images/images_large/about/about_header.jpg" onLoad={this.onImageLoaded} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-main">О нас</div>
                        {/* <div className="header-desc"></div> */}
                        <div className="header-body">
                            Привет! Меня зовут Ирина Ужейко и я – основатель кондитерской ONI. Каждый день мы создаём десерты, которые вдохновляют. Наша главная цель – показать, что современное кондитерское  искусство – это больше, чем просто «что-то сладкое». Это – интересные сочетания вкусов и текстур, натуральные ингредиенты высочайшего качества, авторские рецептуры и внимание к деталям.
                        <br />
                            <br />
                            Мы чтим традиции французской школы, которая по праву считается мировым лидером в сфере кондитерского искусства. Обучение в одной из лучших академий Франции Ecole Internationale de Patisserie Olivier Bajard, множество теоретических семинаров и практических мастер-классов – мы получаем знания из первых рук и перенимаем опыт ведущих шефов мира, чтобы привезти все самое лучшее в Украину.
                        <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-body">
                <div style={{ height: "500px" }} />
            </div>
            <div className="about-footer">
                <img src="/images/icons/Oni_logo.png" />
            </div>
            <Busy loading={loading} />
        </div>;
    }
};