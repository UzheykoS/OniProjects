// import React from 'react';
// import { useStore } from '../../hooks';
// import { IReactComponent } from '../../components/common/interfaces';
// import { RouteConfigComponentProps } from 'react-router-config';
// import { Redirect } from 'react-router';

// const hasAccess = (id: number) => {
//   return (Component: IReactComponent) => {
//     return (props?: RouteConfigComponentProps) => {
//       const store = useStore();

//       if (store.app.actionPermission[id]) {
//         return <Component {...props} />;
//       }

//       return <Redirect to='/forbidden' />;
//     };
//   };
// };

// export default hasAccess;
