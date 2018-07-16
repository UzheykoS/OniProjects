import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        label: state.label
    };
};

const mapDispatchToProps = (dispatch) => {
};

export interface INewOrderComponentProps {
    label?: string;
    hasErrored?: boolean;
    isLoading?: boolean;
}

class NewOrderComponent extends Component<INewOrderComponentProps, any>{
    render() {
        const { label, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (isLoading) {
            return <p>Loading…</p>;
        }
        return <>            
            <div className="hello-world">
                <div className="hello-world-child">
                    {label}
                </div>
            </div>
        </>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(NewOrderComponent)
