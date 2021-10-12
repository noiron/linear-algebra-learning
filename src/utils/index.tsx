import { MatrixType, Row } from '../interface';

/**
 * B行加上A行的N倍
 */
export function replacement(rowA: Row, rowB: Row, times: number) {
  for (let i = 0; i < rowB.length; i++) {
    rowB[i] = rowB[i] + times * rowA[i];
  }
}

/**
 * 寻找主元的位置
 */
export function findPivotPos(matrix: MatrixType, lastPos: [number, number]) {
  // TODO: 主元位置的判断需要修改，如果一个元素及其下方均为0，则右移一列
  return [lastPos[0] + 1, lastPos[1] + 1];
}
