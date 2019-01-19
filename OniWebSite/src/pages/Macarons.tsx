import * as React from 'react'
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { MacaronSingle } from '../components/MacaronSingle'
import { Busy } from '../components/Busy';

interface IMacaronsState {
    loading?: any;
    height?: string;
}

export class Macarons extends React.Component<any, IMacaronsState>{
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

        return <div className='macarons-container'>
            <Nav tab={Tabs.Macarons} />
            <div className='macarons-header'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='header-main'>Макарон</div>
                        {/* <div className='header-desc'>Очень вкусные дессерты</div> */}
                        <div className='header-body'>
                            Вы когда-то пробовали макарон? Мы про настоящий, правильный, с ярким вкусом, хорошо пропитанными миндальными половинками и тонкой хрустящей корочкой. Про тот, что не крошится в руках. И про тот, который невозможно забыть. Про такой, как у нас.
                            <br />
                            <br />
                            Каждый день мы делаем свежие макарон, для которых используем исключительно натуральные ингредиенты. Вы можете выбрать любые вкусы из нашего меню и сформировать свой набор на 12 или 24 штуки. Обязательно свяжитесь с нами, чтобы уточнить наличие вкусов и детали заказа (доставка возможна день в день).
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='macarons-photo' style={{ height: height }} >
                            <img src='./images/images_large/macarons/mac_header.jpg' onLoad={this.onImageLoaded} />
                        </div>
                        {/* <div className='macarons-prices'>
                            <div className='macarons-small'>
                                <div className='price-small'>
                                    <span className='large'>270</span>
                                    <span className='small'>.00</span>
                                    <div className='qty'>12шт</div>
                                </div>
                                <img src='./images/images_large/macarons/mac_small.png' className='small-image' />
                            </div>
                            <div className='macarons-large'>
                                <div className='price-large'>
                                    <span className='large'>540</span>
                                    <span className='small'>.00</span>
                                    <div className='qty'>24шт</div>
                                </div>

                                <img src='./images/images_large/macarons/mac_header.jpg' className='large-image' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='macarons-body'>

                <div className='mixes'>Наборы</div>
                <div className='row'>
                <div className='col-md-3'>
                        <div className='macarons-mix-photo'>
                            <img src='./images/images_large/macarons/mac_small.png' />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='price'>
                            <p><span>288</span>.00</p>
                            <div>12 шт</div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='macarons-mix-photo'>
                            <img src='./images/images_large/macarons/mac_large.png' />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='price'>
                        <p><span>576</span>.00</p>
                        <div>24 шт</div>
                        </div>
                    </div>                    
                </div>

                <div className='tastes'>Вкусы</div>
                <div className='row'>
                    <div className='col-md-6'>
                        <MacaronSingle name='Малина'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального пюре малины с ярким малиновым центром'
                            imageOnTheLeft={true}
                            hoverImageUrl='./images/images_large/macarons/macaron1_hover.jpg'
                            imageUrl='./images/images_large/macarons/macaron1.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <MacaronSingle name='Манго-Маракуйя'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального пюре манго и маракуйи с ярким центром манго-маракуйя'
                            imageOnTheLeft={true}
                            imageUrl='./images/images_large/macarons/macaron2.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron2_hover.jpg' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <MacaronSingle name='Фисташка'
                            shortDescription=''
                            fullDescription='Начинка на основе натуральной  100% фисташковой пасты без сахара'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/macarons/macaron3.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron3_hover.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <MacaronSingle name='Дор Блю-Груша'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе сыра Дор Блю с центром из натурального грушевого пюре'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/macarons/macaron4.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron4_hover.jpg' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <MacaronSingle name='Кофе-Солёная карамель'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального кофе с центром из мягкой соленой карамели'
                            imageOnTheLeft={true}
                            imageUrl='./images/images_large/macarons/macaron5.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron5_hover.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <MacaronSingle name='Пармезан-Инжир'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе сыра Пармезан с центром из натурального пюре инжира'
                            imageOnTheLeft={true}
                            imageUrl='./images/images_large/macarons/macaron6.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron6_hover.jpg' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <MacaronSingle name='Смородина'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального пюре смородины с ярким смородиновым центром'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/macarons/macaron7.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron7_hover.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <MacaronSingle name='Шоколад'
                            shortDescription=''
                            fullDescription='Начинка на основе натурального бельгийского черного шоколада 60%'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/macarons/macaron8.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron8_hover.jpg' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <MacaronSingle name='Лаванда-Черника'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе молочных сливок, настоянных на цветках лаванды, с центром из натурального пюре черники'
                            imageOnTheLeft={true}
                            imageUrl='./images/images_large/macarons/macaron9.jpg'
                            hoverImageUrl='./images/images_large/macarons/macaron9_hover.jpg' />
                    </div>
                    <div className='col-md-6'>
                    </div>
                </div>
            </div>
            <div className='macarons-footer'>
                <img src='/images/icons/Oni_logo.png' />
            </div>
            <Busy loading={loading} />
        </div>;
    }
};