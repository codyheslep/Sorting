describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('returns a list of 2', function () {
    expect(bubbleSort([5, 3])).toEqual([3, 5])
  })

  it('can handle large sets', function () {
    expect(bubbleSort([6, 7, 3, 9, 1])).toEqual([1, 3, 6, 7, 9])
  })
});

describe("the swap function", function () {
  spyOn(bubbleSort, "swap").and.callThrough();
});
it("swap is called 6 times", function () {
  expect(swap.calls.count()).toEqual(6);
});
