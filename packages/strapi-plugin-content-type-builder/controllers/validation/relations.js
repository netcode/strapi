'use strict';

const yup = require('yup');
const { validators } = require('./common');

module.exports = validNatures => {
  const contentTypesUIDs = Object.keys(strapi.contentTypes);

  return {
    target: yup
      .string()
      .oneOf(contentTypesUIDs)
      .required(),
    nature: yup
      .string()
      .oneOf(validNatures)
      .required(),
    unique: validators.unique,
    dominant: yup.boolean(),
    columnName: yup.string(),
    targetAttribute: yup.string(),
    targetColumnName: yup.string(),
  };
};
