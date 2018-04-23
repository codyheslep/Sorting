

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
  it("swap is called 14 times", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([6, 7, 3, 9, 1]);
    expect(swap.calls.count()).toEqual(12);
  });
});

