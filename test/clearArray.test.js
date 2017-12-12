import clearArray from "../src/clearArray";
import _ from "../src";

describe("clearArray", () => {
  it("should be defined from the imports", () => {
    expect(_.clearArray).toBeDefined();
  });

  it("should clean the array and return the results", () => {
    const arr = ["a", "b", "c"];
    const newArr = clearArray(arr);

    expect(arr).toEqual([]);
    expect(newArr).toEqual([]);
  });

  it("should throw an error if the given data is not an array", () => {
    let input = { prop: "test" };
    let outcome = () => {
      clearArray(input);
    };

    expect(outcome).toThrowError("Not an array");
  });
});
