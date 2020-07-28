import React from 'react';
import withPrivateRoute from '../components/withPrivateRoute';

const HocTest = () => <p>Authorization HOC Test!</p>;

export default withPrivateRoute(HocTest);
