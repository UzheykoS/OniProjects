import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Loading from './index';

it('to match snapshot of Loading', () => {
  const test = renderer.create(<Loading />);
  expect(test).toMatchInlineSnapshot(`
<div
  className="Component-loadingWrapper-1"
>
  <div
    className="MuiCircularProgress-root-3 MuiCircularProgress-colorPrimary-6 MuiCircularProgress-indeterminate-5 Component-loadingRoot-2"
    id="circular-progress"
    role="progressbar"
    style={
      Object {
        "height": 40,
        "width": 40,
      }
    }
  >
    <svg
      className="MuiCircularProgress-svg-8"
      viewBox="22 22 44 44"
    >
      <circle
        className="MuiCircularProgress-circle-9 MuiCircularProgress-circleIndeterminate-11"
        cx={44}
        cy={44}
        fill="none"
        r={20.2}
        strokeWidth={3.6}
        style={Object {}}
      />
    </svg>
  </div>
</div>
`);
});
