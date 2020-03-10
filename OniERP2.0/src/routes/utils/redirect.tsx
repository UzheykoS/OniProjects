import React from 'react';
import { Redirect } from 'react-router';
import { LocationDescriptorObject, Path } from 'history';

export default function redirect(to: LocationDescriptorObject | Path) {
  return () => <Redirect to={to} />;
}
