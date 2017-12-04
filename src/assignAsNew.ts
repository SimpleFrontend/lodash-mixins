import * as _ from 'lodash';

const assignAsNew = function<T>(
  object: T,
  ...source: { [key: string]: any }[]
): { [key: string]: any } {
  const newObject: T = _.cloneDeep(object);
  return _.assign(newObject, ...source);
};

export default assignAsNew;
