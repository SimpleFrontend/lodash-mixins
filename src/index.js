import * as lodash from "lodash";
import clearArray from "./clearArray";

lodash.mixin({
  clearArray
});

export default lodash;

export const _ = lodash;
