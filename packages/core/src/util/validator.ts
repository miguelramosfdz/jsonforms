import * as AJV from 'ajv';
import { Draft4 } from '../models/draft4';

export const createAjv = () => {
  const ajv = new AJV({
    schemaId: 'id',
    allErrors: true,
    jsonPointers: true,
    errorDataPath: 'property'
  });
  ajv.addFormat('time', '^([0-1][0-9]|2[0-3]):[0-5][0-9]$');
  ajv.addMetaSchema(Draft4);
  return ajv;
};
