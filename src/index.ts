import * as _ from 'lodash';
import assignAsNew from './assignAsNew';
import LodashMixins from './lodash-mixins.interface';

const mixins = <LodashMixins>_.mixin({
  assignAsNew
});

export = mixins;
