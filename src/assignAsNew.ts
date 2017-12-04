var _ = require('lodash');

module.exports = <T, S, K>(object: T, ...source: S[]) => {
  const newObject: T = _.cloneDeep(object);
  return _.assign(newObject, ...source);
};
