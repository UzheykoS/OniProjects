import React from 'react';
import { Footer } from '../components/Footer';

export class Stub extends React.Component<any, any> {
  render() {
    const { match } = this.props;

    return (
      <div>
        Stub for {match.params.id}
        <Footer />
      </div>
    );
  }
}
