var _ = require('lodash');

module.exports = (object, source) => {
  const newObject = _.cloneDeep(object);
  return _.assign(newObject, source);
};
