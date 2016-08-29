import React from 'react';

const bodyRowContextTypes = {
  updateHeight: React.PropTypes.func
};
const bodyRowTypes = {
  'data-rowindex': React.PropTypes.number
};
const bodyWrapperContextTypes = {
  startHeight: React.PropTypes.number,
  endHeight: React.PropTypes.number
};
const bodyWrapperTypes = {
  children: React.PropTypes.any
};
const bodyChildContextTypes = {
  ...bodyRowContextTypes,
  ...bodyWrapperContextTypes
};

export {
  bodyChildContextTypes,
  bodyRowContextTypes,
  bodyRowTypes,
  bodyWrapperContextTypes,
  bodyWrapperTypes
};
