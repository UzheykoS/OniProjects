import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import NewOrderComponent from '../components/NewOrderComponent';
import { Check } from '../utils/types';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    };
};

export interface ICheckPageProps {
}

class CheckPage extends Component<ICheckPageProps, any>{
    render() {
        return <div className="container">
          Check Page
          <NewOrderComponent />
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(CheckPage)
