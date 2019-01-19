import * as React from 'react';

interface IFooterProps {
}

export const Footer: React.SFC<IFooterProps> = (props) => {
    return <div className='footer'>
        <img src='/images/icons/Oni_logo.png' />
    </div>;
}