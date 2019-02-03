
import * as React from 'react';
import * as Media from 'react-media';

interface IZephyrSingleProps {
    name: string;
    fullDescription: string;
    imageOnTheLeft: boolean;
    imageUrl: string;
}

interface IZephyrSingleState {
    mouseOver: boolean;
}

export class ZephyrSingle extends React.Component<IZephyrSingleProps, IZephyrSingleState>{
    constructor(props) {
        super(props);

        this.state = {
            mouseOver: false
        }
    }

    onMouseOver = () => {
        setTimeout(() => {
            this.setState({
                mouseOver: true
            });
        },
            100);
    }

    onMouseOut = () => {
        this.setState({
            mouseOver: false
        })
    }

    render() {
        const { name, fullDescription, imageOnTheLeft, imageUrl } = this.props;

        if (imageOnTheLeft) {
            return <div>
                <Media query={{ maxWidth: 800 }}>
                    {matches => matches ? (
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='zephyr-image-container'>
                                    <img src={imageUrl} />
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='zephyr-desc-container' style={{ textAlign: 'center' }}>
                                    <div className='taste-name'>
                                        {name}
                                    </div>
                                    <div className='taste-body'>
                                        {fullDescription}
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-1' />
                        </div>
                    ) : (
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='zephyr-image-container'>
                                        <img src={imageUrl} />
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='zephyr-desc-container'>
                                        <div className='taste-name'>
                                            {name}
                                        </div>
                                        <div className='taste-body'>
                                            {fullDescription}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1' />
                            </div>
                        )}
                </Media>
            </div>;
        }
        else {
            return <div>
                <Media query={{ maxWidth: 800 }}>
                    {matches => matches ? (
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='zephyr-image-container'>
                                    <img src={imageUrl} />
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='zephyr-desc-container' style={{ textAlign: 'center' }}>
                                    <div className='taste-name'>
                                        {name}
                                    </div>
                                    <div className='taste-body'>
                                        {fullDescription}
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-1' />
                        </div>
                    ) : (
                            <div className='row'>
                                <div className='col-md-5' >
                                    <div className='zephyr-desc-container' style={{ textAlign: 'right' }}>
                                        <div className='taste-name'>
                                            {name}
                                        </div>
                                        <div className='taste-body'>
                                            {fullDescription}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='zephyr-image-container'>
                                        <img src={imageUrl} />
                                    </div>
                                </div>
                                <div className='col-md-1' />
                            </div>
                        )}
                </Media>
            </div>;
        }
    }
};