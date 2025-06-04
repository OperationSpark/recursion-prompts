(function () {
  'use strict';

  describe('More Exercises in Recursion', () => {
    describe('36. Count tags', () => {
      const htmlStrings = [
        '<p class="recursionTest"></p>',
        '<p class="otherClassName recursionTest"></p>',
        '<p><div class="somediv"><div class="innerdiv"><span class="recursionTest">yay</span></div></div></p>',
      ];

      let result;
      let expectedTagCount;
      let originalTagCount = tagCount;
      tagCount = sinon.spy(tagCount);

      it('should return number of times of tag occurs on node', () => {
        $('body').addClass('recursionTest');
        htmlStrings.forEach(function (htmlString) {
          const $rootElement = $(htmlString);
          $('body').append($rootElement);

          result = tagCount('p');
          expectedTagCount = document.getElementsByTagName('p').length;
          expect(result).to.equal(expectedTagCount);

          $rootElement.remove();
        });
        $('body').removeClass('recursionTest');
      });

      it('should return a number', () => {
        expect(typeof result).to.equal('number');
      });

      it('should use recursion by calling self', () => {
        expect(tagCount.callCount).to.be.above(1);
        tagCount = originalTagCount;
      });
    });

    describe('37. Binary Search', () => {
      const input1 = [1, 2, 3, 4, 5, 6];
      const input2 = [1, 2, 3, 4, 5, 6, 7];
      const primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97,
      ];

      it('should return a number', () => {
        expect(typeof binarySearch(input1, 3)).to.eql('number');
      });

      it('should not mutate the input array', () => {
        const result = binarySearch(input1, 4);
        expect(input1).to.eql([1, 2, 3, 4, 5, 6]);
      });

      it('should return null if target not found', () => {
        expect(binarySearch(input1, 7)).to.eql(null);
        expect(binarySearch(input2, 8)).to.eql(null);
        expect(binarySearch(primes, 32)).to.eql(null);
      });

      it('should return index of target', function () {
        expect(binarySearch(input1, 1)).to.eql(0);
        expect(binarySearch(input1, 2)).to.eql(1);
        expect(binarySearch(input1, 3)).to.eql(2);
        expect(binarySearch(input1, 4)).to.eql(3);
        expect(binarySearch(input1, 5)).to.eql(4);
        expect(binarySearch(input1, 6)).to.eql(5);
        expect(binarySearch(input2, 1)).to.eql(0);
        expect(binarySearch(input2, 2)).to.eql(1);
        expect(binarySearch(input2, 3)).to.eql(2);
        expect(binarySearch(input2, 4)).to.eql(3);
        expect(binarySearch(input2, 5)).to.eql(4);
        expect(binarySearch(input2, 6)).to.eql(5);
        expect(binarySearch(input2, 7)).to.eql(6);
        expect(binarySearch(primes, 2)).to.eql(0);
        expect(binarySearch(primes, 19)).to.eql(7);
        expect(binarySearch(primes, 41)).to.eql(12);
        expect(binarySearch(primes, 59)).to.eql(16);
        expect(binarySearch(primes, 97)).to.eql(24);
      });

      it('should use recursion by calling self', () => {
        const originalBinarySearch = binarySearch;
        binarySearch = sinon.spy(binarySearch);
        binarySearch(primes, 19);
        expect(binarySearch.callCount).to.be.above(1);
        binarySearch = originalBinarySearch;
      });
    });

    describe('38. Merge Sort', () => {
      const numbers = [8, 2, 20, 1, 15];

      it('should return an array', () => {
        const sortedNumbers = mergeSort(numbers);
        expect(Array.isArray(sortedNumbers)).to.equal(true);
      });

      it('should not mutate the input array', () => {
        const sortedNumbers = mergeSort(numbers);
        expect(numbers).to.eql([8, 2, 20, 1, 15]);
      });

      it('should sort an array of numbers in order of least to greatest', () => {
        const sortedNumbers = mergeSort(numbers);
        expect(sortedNumbers).to.eql([1, 2, 8, 15, 20]);
      });

      it('should be able to handle negative numbers', () => {
        const numbers = [8, -2, 20, 1, -15];
        const sortedNumbers = mergeSort(numbers);
        expect(sortedNumbers).to.eql([-15, -2, 1, 8, 20]);
      });

      it('should use recursion by calling self', () => {
        const originalMergeSort = mergeSort;
        mergeSort = sinon.spy(mergeSort);
        mergeSort(numbers);
        expect(mergeSort.callCount).to.be.above(1);
        mergeSort = originalMergeSort;
      });
    });
  });

  // function checkForNativeMethods(runUnderbarFunction) {
  //   it('should not use the native version of sort', function() {
  //     // These spies are set up in testSupport.js
  //     runUnderbarFunction();
  //     expect(Array.prototype.indexOf.called).to.equal(false);
  //     expect(Array.prototype.filter.called).to.equal(false);
  //     expect(Array.prototype.sort.called).to.equal(false);
  //   });
  // }
  //     checkForNativeMethods(function() {
  //       mergeSort(numbers);
  //     });
})();
