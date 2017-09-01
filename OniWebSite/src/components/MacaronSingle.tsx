import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import * as Media from 'react-media'

interface IMacaronSingleProps {
    name: string;
    shortDescription: string;
    fullDescription: string;
    imageOnTheLeft: boolean;
    imageUrl: string;
}

export class MacaronSingle extends React.Component<IMacaronSingleProps, any>{
    render() {
        const { name, shortDescription, fullDescription, imageOnTheLeft, imageUrl } = this.props;

        if (imageOnTheLeft) {
            return <div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="macaron-image-container">
                            <img src={imageUrl} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="macaron-desc-container">
                            <div className="taste-name">
                                {name}
                            </div>
                            <div className="taste-desc">
                                {shortDescription}
                            </div>
                            <div className="taste-body">
                                {fullDescription}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1" />
                </div>
            </div>;
        }
        else {
            return <div>
                <Media query={{ maxWidth: 800 }}>
                    {matches => matches ? (
                        <div className="row">
                            <div className="col-md-5">
                                <div className="macaron-image-container">
                                    <img src={imageUrl} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="macaron-desc-container">
                                    <div className="taste-name">
                                        {name}
                                    </div>
                                    <div className="taste-desc">
                                        {shortDescription}
                                    </div>
                                    <div className="taste-body">
                                        {fullDescription}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1" />
                        </div>
                    ) : (
                            <div className="row">
                                <div className="col-md-6" >
                                    <div className="macaron-desc-container">
                                        <div className="taste-name">
                                            {name}
                                        </div>
                                        <div className="taste-desc">
                                            {shortDescription}
                                        </div>
                                        <div className="taste-body">
                                            {fullDescription}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="macaron-image-container">
                                        <img src={imageUrl} />
                                    </div>
                                </div>
                                <div className="col-md-1" />
                            </div>
                        )}
                </Media>
            </div>;
        }
    }
};