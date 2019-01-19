import * as React from 'react';
import * as Media from 'react-media';

interface IMacaronSingleProps {
    name: string;
    shortDescription: string;
    fullDescription: string;
    imageOnTheLeft: boolean;
    imageUrl: string;
    hoverImageUrl: string;
}

interface IMacaronSingleState {
    mouseOver: boolean;
}

export class MacaronSingle extends React.Component<IMacaronSingleProps, IMacaronSingleState>{
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
        const { name, shortDescription, fullDescription, imageOnTheLeft, imageUrl, hoverImageUrl } = this.props;
        const { mouseOver } = this.state;

        if (imageOnTheLeft) {
            return <div>
                <Media query={{ maxWidth: 800 }}>
                    {matches => matches ? (
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='macaron-image-container'>
                                    <img src={imageUrl} />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='macaron-desc-container' style={{ textAlign: 'center' }}>
                                    <div className='taste-name'>
                                        {name}
                                    </div>
                                    <div className='taste-desc'>
                                        {shortDescription}
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
                                <div className='col-md-4'>
                                    <div className='macaron-image-container'>
                                        {/* <img onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} src={mouseOver ? hoverImageUrl : imageUrl} /> */}
                                        <img className='taste bottom' src={hoverImageUrl} />
                                        <img className='taste top' src={imageUrl} />
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <div className='macaron-desc-container'>
                                        <div className='taste-name'>
                                            {name}
                                        </div>
                                        <div className='taste-desc'>
                                            {shortDescription}
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
                            <div className='col-md-4'>
                                <div className='macaron-image-container'>
                                    <img src={imageUrl} />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='macaron-desc-container' style={{ textAlign: 'center' }}>
                                    <div className='taste-name'>
                                        {name}
                                    </div>
                                    <div className='taste-desc'>
                                        {shortDescription}
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
                                <div className='col-md-7' >
                                    <div className='macaron-desc-container' style={{ textAlign: 'right' }}>
                                        <div className='taste-name'>
                                            {name}
                                        </div>
                                        <div className='taste-desc'>
                                            {shortDescription}
                                        </div>
                                        <div className='taste-body'>
                                            {fullDescription}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='macaron-image-container'>
                                        <img className='taste bottom' src={hoverImageUrl} />
                                        <img className='taste top' src={imageUrl} />
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