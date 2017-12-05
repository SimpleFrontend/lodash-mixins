import { LoDashStatic } from 'lodash';

export default interface LoDashMixins extends LoDashStatic {
  assignAsNew: <T>(
    object: T,
    ...source: { [key: string]: any }[]
  ) => { [key: string]: any };
};
