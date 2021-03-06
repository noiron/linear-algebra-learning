import * as  utils from '../utils';

test('将第二行的两倍加至第一行上', () => {
  const firstRow = [1, 2];
  const secondRow = [3, 4];
  utils.replacement(firstRow, secondRow, 2);
  expect(firstRow).toEqual([7, 10]);
});

test('相同的两行相减', () => {
  const firstRow = [5, 5];
  const secondRow = [5, 5];
  utils.replacement(firstRow, secondRow, -1);
  expect(firstRow).toEqual([0, 0]);
});
