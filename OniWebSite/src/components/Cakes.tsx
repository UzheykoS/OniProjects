import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { CakeSingle } from './CakeSingle'

export default class Cakes extends React.Component<any, any>{
    render() {
        return <div className="cakes-container">
            <Nav tab={Tabs.Cakes} />
            <div className="cakes-header">
                <div className="row">
                    <div className="col-md-7">
                        <div className="header-main">Торты</div>
                        <div className="header-desc">Очень вкусные дессерты</div>
                        <div className="header-body">А тут много текста
                                Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque consectetuer, erat magna sed etiam a viverra ut, fringilla nec sit orci curabitur ut risus, tristique platea ultricies aliquam venenatis curabitur.

In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus. </div>
                    </div>
                    <div className="col-md-5">
                        <div className="cakes-photo">
                            <img src="./images/cake_header.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cakes-body">
                <div className="tastes">Ассортимент</div>
                <CakeSingle
                    name="Soul"
                    shortDescription="Для любителей вечной классики и беспроигрышных сочетаний"
                    fullDescription="Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом."
                    priceSmall="800"
                    priceLarge="1000"
                    weightSmall="1200 г"
                    weightLarge="1600 г"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut1.jpg"
                    imageLargeUrl="/images/cake1.jpg" 
                    paddingTop="14vh" />
                <CakeSingle
                    name="Carrot Cake"
                    shortDescription="Морковный торт, ломающий гастрономические стереотипы"
                    fullDescription="Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром."
                    priceSmall="800"
                    priceLarge="1000"
                    weightSmall="1200 г"
                    weightLarge="1600 г"
                    fullCakeOnTheLeft={true}
                    imageSmallUrl="/images/cut2.jpg"
                    imageLargeUrl="/images/cake2.jpg"
                    paddingTop="16vh" />
                <CakeSingle
                    name="Pink"
                    shortDescription="Легкий торт с ярко выраженной кислинкой"
                    fullDescription="Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс."
                    priceSmall="800"
                    priceLarge="1000"
                    weightSmall="1200 г"
                    weightLarge="1600 г"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut3.jpg"
                    imageLargeUrl="/images/cake3.jpg" 
                    paddingTop="19vh" />
                <CakeSingle
                    name="No Name"
                    shortDescription="Насыщенный ореховый вкус с ярким абрикосовым акцентом"
                    fullDescription="Хрустящий миндально-фундучный слой, бисквит муалё с фундуком, абрикосовое конфи, мусс с молочным шоколадом и домашним пралине."
                    priceSmall="800"
                    priceLarge="1000"
                    weightSmall="1200 г"
                    weightLarge="1600 г"
                    fullCakeOnTheLeft={true}
                    imageSmallUrl="/images/cut4.jpg"
                    imageLargeUrl="/images/cake4.jpg" 
                    paddingTop="22vh" />
                <CakeSingle
                    name="Rio"
                    shortDescription="Идеальная комбинация экзотических фруктов"
                    fullDescription="Хрустящий миндальный слой с кокосом, кокосовый бисквит дакуаз с лаймом, карамелизированные бананы с ананасом, легкий мусс с маракуйей."
                    priceSmall="800"
                    priceLarge="1000"
                    weightSmall="1200 г"
                    weightLarge="1600 г"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut5.jpg"
                    imageLargeUrl="/images/cake5.jpg"
                    paddingTop="22vh" />
            </div>
            <div className="cakes-footer">
                <img src="/images/Oni_logo.png" />
            </div>
        </div>;
    }
};