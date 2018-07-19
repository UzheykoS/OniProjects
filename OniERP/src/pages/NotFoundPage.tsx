import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export interface INotFoundPageProps {
}

class NotFoundPage extends Component<INotFoundPageProps, any>{
    render() {
        const { } = this.props;

        return <div className="container">
            Not Found
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (NotFoundPage)
