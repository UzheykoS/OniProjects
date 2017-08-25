import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"

interface ICakeSingleProps {
    name: string;
    shortDescription: string;
    fullDescription: string;
    priceSmall: string;
    priceLarge: string;
    weightSmall: string;
    weightLarge: string;
    fullCakeOnTheLeft: boolean;
    imageSmallUrl: string;
    imageLargeUrl: string;
}

export class CakeSingle extends React.Component<ICakeSingleProps, any>{
    render() {
        const { name, shortDescription, fullDescription, priceSmall, priceLarge,
            weightSmall, weightLarge, fullCakeOnTheLeft, imageSmallUrl, imageLargeUrl } = this.props;

        if (fullCakeOnTheLeft) {
            return <div className="row">
                <div className="col-md-6">
                    <img src={imageLargeUrl} />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="taste-name">
                                {name}
                            </div>
                            <div className="taste-desc">
                                {shortDescription}
                            </div>
                            <div className="taste-body">
                                {fullDescription}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="price-small">
                                        {priceSmall}
                                    </div>
                                    <div className="weight-small">
                                        {weightSmall}
                                    </div>
                                    <div className="size-small">
                                        20 cm
                                    </div>
                                    <div className="persons-small">
                                        7-8
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="price-large">
                                        {priceLarge}
                                    </div>
                                    <div className="weight-large">
                                        {weightLarge}
                                    </div>
                                    <div className="size-large">
                                        35 cm
                                    </div>
                                    <div className="persons-large">
                                        10-12
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="cake-image-wrapper">
                                <img src={imageSmallUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        }
        else {
            return <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="cake-image-wrapper">
                                <img src={imageSmallUrl} />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="taste-name">
                                {name}
                            </div>
                            <div className="taste-desc">
                                {shortDescription}
                            </div>
                            <div className="taste-body">
                                {fullDescription}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="price-small">
                                        {priceSmall}
                                    </div>
                                    <div className="weight-small">
                                        {weightSmall}
                                    </div>
                                    <div className="size-small">
                                        20 cm
                                    </div>
                                    <div className="persons-small">
                                        7-8
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="price-large">
                                        {priceLarge}
                                    </div>
                                    <div className="weight-large">
                                        {weightLarge}
                                    </div>
                                    <div className="size-large">
                                        35 cm
                                    </div>
                                    <div className="persons-large">
                                        10-12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={imageLargeUrl} />
                </div>
            </div>;
        }
    }
};