import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import PartnersComponent from '../components/PartnersComponent';
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

export interface IPartnersPageProps {
}

export class PartnersPage extends Component<IPartnersPageProps, any>{
  render() {
    return <div>
      <Card className={'cardContainer'} raised>
        <CardContent>          
          <PartnersComponent />
        </CardContent>
      </Card>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
  (PartnersPage)
