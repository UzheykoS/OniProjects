import React from 'react';

export class Stub extends React.Component<any, any> {
  render() {
    const { match } = this.props;

    return (
      <div>
        Stub for {match.params.id}
      </div>
    );
  }
}
