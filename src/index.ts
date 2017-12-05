import * as _ from 'lodash';
import assignAsNew from './assignAsNew';
import LoDashMixins from './lodash-mixins.interface';

_.mixin({
  assignAsNew
});

export default <LoDashMixins>_;
