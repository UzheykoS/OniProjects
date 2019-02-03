import * as React from 'react'
import { Nav } from '../../components/Nav';
import { Tabs, ProductTabs } from '../../utils/Helper'
import { ChouxSingle } from '../../components/ChouxSingle'
import { Busy } from '../../components/Busy';

interface IChouxState {
    loading?: any;
    height?: string;
}

export class Choux extends React.Component<any, IChouxState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
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
        const { loading } = this.state;

        return <div className='choux-container'>
            <Nav tab={Tabs.Products} subTab={ProductTabs.Choux} />
            <div className='choux-body'>

                <div className='choux-header'>
                    <div className='choux-info'>
                        <div className='title'>Шу</div>
                        <div className='description'>
                            Основа пирожного шу – заварное тесто, покрытое тонким хрустящим слоем. Внутри – двойная начинка из нежного крема и яркого центра. Шу украшены разноцветными кружочками из марципана. У нас можно выбрать любые вкусы из меню и сформировать свой набор на 2 или 4 шу.
                        </div>
                    </div>

                    <div className='choux-mix-section-container'>
                        <div className='choux-mix-section'>
                            <div className='choux-mix-photo'>
                                <img src='./images/images_large/choux/choux_mix_small.jpg' />
                            </div>
                            <div className='single-section-info'>
                                <div className='price'>
                                    <div className='value'>80</div>
                                    <div className='currency'> грн</div>
                                </div>
                                <div className='quantity'>
                                    <div>2 шт</div>
                                </div>
                            </div>
                        </div>

                        <div className='choux-mix-section'>
                            <div className='choux-mix-photo'>
                                <img src='./images/images_large/choux/choux_mix_large.jpg' />
                            </div>
                            <div className='single-section-info'>
                                <div className='price'>
                                    <div className='value'>160</div>
                                    <div className='currency'> грн</div>
                                </div>
                                <div className='quantity'>
                                    <div>4 шт</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='tastes'>Вкусы</div>
                <div className='row'>
                    <div className='col-md-6'>
                        <ChouxSingle name='Малина'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального пюре малины с ярким малиновым центром'
                            imageOnTheLeft={true}
                            hoverImageUrl='./images/images_large/choux/choux_1_hover.jpg'
                            imageUrl='./images/images_large/choux/choux_1.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <ChouxSingle name='Манго-Маракуйя'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе натурального пюре манго и маракуйи с ярким центром манго-маракуйя'
                            imageOnTheLeft={true}
                            imageUrl='./images/images_large/choux/choux_2.jpg'
                            hoverImageUrl='./images/images_large/choux/choux_2_hover.jpg' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <ChouxSingle name='Фисташка'
                            shortDescription=''
                            fullDescription='Начинка на основе натуральной  100% фисташковой пасты без сахара'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/choux/choux_3.jpg'
                            hoverImageUrl='./images/images_large/choux/choux_3_hover.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <ChouxSingle name='Дор Блю-Груша'
                            shortDescription=''
                            fullDescription='Двойная начинка на основе сыра Дор Блю с центром из натурального грушевого пюре'
                            imageOnTheLeft={false}
                            imageUrl='./images/images_large/choux/choux_4.jpg'
                            hoverImageUrl='./images/images_large/choux/choux_4_hover.jpg' />
                    </div>
                </div>
            </div>
            <div className='choux-footer'>
                <img src='/images/icons/Oni_logo.png' />
            </div>
            <Busy loading={loading} />
        </div>;
    }
};