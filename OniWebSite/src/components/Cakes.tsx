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
                            <img src="./images/mac_large.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cakes-body">
                <div className="tastes">Ассортимент</div>
                <CakeSingle
                    name="Шоколадный"
                    shortDescription="fringilla nec sit orci curabitur"
                    fullDescription="Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque"
                    priceSmall="800.00"
                    priceLarge="1000.00"
                    weightSmall="1200 g"
                    weightLarge="1600 g"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut1.jpg"
                    imageLargeUrl="/images/cake1.jpg" />
                <CakeSingle
                    name="Rio"
                    shortDescription="fringilla nec sit orci curabitur"
                    fullDescription="Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque"
                    priceSmall="800.00"
                    priceLarge="1000.00"
                    weightSmall="1200 g"
                    weightLarge="1600 g"
                    fullCakeOnTheLeft={true}
                    imageSmallUrl="/images/cut2.jpg"
                    imageLargeUrl="/images/cake2.jpg" />
                <CakeSingle
                    name="Rio"
                    shortDescription="fringilla nec sit orci curabitur"
                    fullDescription="Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque"
                    priceSmall="800.00"
                    priceLarge="1000.00"
                    weightSmall="1200 g"
                    weightLarge="1600 g"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut3.jpg"
                    imageLargeUrl="/images/cake3.jpg" />
                <CakeSingle
                    name="Rio"
                    shortDescription="fringilla nec sit orci curabitur"
                    fullDescription="Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque"
                    priceSmall="800.00"
                    priceLarge="1000.00"
                    weightSmall="1200 g"
                    weightLarge="1600 g"
                    fullCakeOnTheLeft={true}
                    imageSmallUrl="/images/cut4.jpg"
                    imageLargeUrl="/images/cake4.jpg" />
                <CakeSingle
                    name="Rio"
                    shortDescription="fringilla nec sit orci curabitur"
                    fullDescription="Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque"
                    priceSmall="800.00"
                    priceLarge="1000.00"
                    weightSmall="1200 g"
                    weightLarge="1600 g"
                    fullCakeOnTheLeft={false}
                    imageSmallUrl="/images/cut5.jpg"
                    imageLargeUrl="/images/cake5.jpg" />
            </div>
            <div className="cakes-footer">
                <img src="/images/Oni_logo.png" />
            </div>
        </div>;
    }
};