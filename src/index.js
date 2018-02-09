import * as lodash from 'lodash';
import clearArray from './clearArray';

lodash.mixin({
    clearArray
});

export const _ = lodash;
