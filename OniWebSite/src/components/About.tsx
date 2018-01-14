import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"

export class About extends React.Component<any, any>{
    render() {
        return <div className="about-container">
            <Nav tab={Tabs.About} />
            <div className="about-header">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-photo">
                            <img src="./images/about_header.jpg" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-main">О нас</div>
                        {/* <div className="header-desc"></div> */}
                        <div className="header-body">
                        Привет! Меня зовут Ирина Ужейко и я – основатель кондитерской ONI. Каждый день мы создаём десерты, которые вдохновляют. Наша главная цель – показать, что современное кондитерское  искусство – это больше, чем просто «что-то сладкое». Это – интересные сочетания вкусов и текстур, натуральные ингредиенты высочайшего качества, авторские рецептуры и внимание к деталям.
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-body">
                <div style={{ height: "500px" }}/>
            </div>
            <div className="about-footer">
                <img src="/images/Oni_logo.png" />
            </div>
        </div>;
    }
};