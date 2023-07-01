import { merge } from "../src/index";

describe("testing merge function", () => {
  test("2 empty arrays", () => {
    expect(merge([], [])).toEqual([]);
  });
  test("non overlapping array", () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("overlapping array", () => {
    expect(merge([1, 3, 5, 7], [2, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 5, 6, 7]);
  });
  test("array1 remaining elements", () => {
    expect(merge([1, 5, 10, 11, 12], [2, 3])).toEqual([1, 2, 3, 5, 10, 11, 12]);
  });
  test("array2 remaining elements", () => {
    expect(merge([1, 5], [2, 3, 6, 7, 8])).toEqual([1, 2, 3, 5, 6, 7, 8]);
  });
});
