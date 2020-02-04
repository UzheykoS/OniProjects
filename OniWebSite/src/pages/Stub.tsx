import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Pages } from '@constants/routes';

export class Stub extends React.Component<any, any> {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Nav tab={Pages.Clients} />
        Stub for {match.params.id}
        <Footer />
      </div>
    );
  }
}
