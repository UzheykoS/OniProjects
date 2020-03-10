import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import ProductComponent from '../components/ProductComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export interface IProductPageProps {
}

export class ProductPage extends Component<IProductPageProps, any>{
  render() {
    return <div>
      <Card className={'cardContainer'} raised>
        <CardContent>          
          <ProductComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (ProductPage)
