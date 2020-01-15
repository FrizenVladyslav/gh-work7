import ajv from 'ajv';

require('ajv-keywords')(ajv());

const updateSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
    },
  },
  required: [],
  additionalProperties: true,
};

const createSchema = {
  ...updateSchema,
  required: ['firstName', 'lastName', 'email', 'password'],
};

export const update = ajv().compile(updateSchema);
export const create = ajv().compile(createSchema);
