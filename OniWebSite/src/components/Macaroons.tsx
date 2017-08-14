import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { MacaronSingle } from './MacaronSingle'

export class Macaroons extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div className="macarons-container">
            <Nav tab={Tabs.Macarons} />
            <div className="macarons-header">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-main">Макаруны</div>
                        <div className="header-desc">Очень вкусные дессерты</div>
                        <div className="header-body">А тут много текста
                                Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque consectetuer, erat magna sed etiam a viverra ut, fringilla nec sit orci curabitur ut risus, tristique platea ultricies aliquam venenatis curabitur.

In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus. </div>
                    </div>
                    <div className="col-md-6">
                        <div className="macarons-prices">
                            <div className="price-large">
                                <span className="large">540</span>
                                <span className="small">.00</span>
                                <div className="qty">24шт</div>
                            </div>
                            <div className="price-small">
                                <span className="large">270</span>
                                <span className="small">.00</span>
                                <div className="qty">12шт</div>
                            </div>
                            <img src="./images/mac_large.png" className="large-image" />
                            <img src="./images/mac_small.png" className="small-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="macarons-body">
                <div className="tastes">Вкусы</div>
                <div className="row">
                    <div className="col-md-6">
                        <MacaronSingle name="Лимонный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={true}
                            imageUrl="./images/macaron1.jpg" />
                    </div>
                    <div className="col-md-6">
                        <MacaronSingle name="Шоколадный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={true}
                            imageUrl="./images/macaron2.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <MacaronSingle name="Лимонный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={false}
                            imageUrl="./images/macaron3.jpg" />
                    </div>
                    <div className="col-md-6">
                        <MacaronSingle name="Шоколадный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={false}
                            imageUrl="./images/macaron4.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <MacaronSingle name="Лимонный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={true}
                            imageUrl="./images/macaron5.jpg" />
                    </div>
                    <div className="col-md-6">
                        <MacaronSingle name="Шоколадный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={true}
                            imageUrl="./images/macaron6.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <MacaronSingle name="Лимонный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={false}
                            imageUrl="./images/macaron7.jpg" />
                    </div>
                    <div className="col-md-6">
                        <MacaronSingle name="Шоколадный"
                            shortDescription="Короткое описание"
                            fullDescription="In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus"
                            imageOnTheLeft={false}
                            imageUrl="./images/macaron8.jpg" />
                    </div>
                </div>
            </div>
            <div className="macarons-footer">
                <img src="/images/Oni_logo.png" />
            </div>
        </div>;
    }
};