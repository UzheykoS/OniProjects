import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import WriteOffComponent from '../components/WriteOffComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export interface IWriteOffPageProps {}

export class WriteOffPage extends Component<IWriteOffPageProps, any> {
  render() {
    return (
      <div>
        <Card className={'cardContainer'} raised>
          <CardContent>
            <WriteOffComponent />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteOffPage);
