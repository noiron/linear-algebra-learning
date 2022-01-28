import { MatrixType, Row } from '../interface';

/**
 * A行加上B行的N倍
 */
export function replacement(rowA: Row, rowB: Row, times: number) {
  for (let i = 0; i < rowB.length; i++) {
    rowA[i] = rowA[i] + times * rowB[i];
  }
}

/**
 * 寻找主元的位置
 */
export function findPivotPos(matrix: MatrixType, lastPos: [number, number]) {
  // TODO: 主元位置的判断需要修改，如果一个元素及其下方均为0，则右移一列
  const pos: [number, number] = [lastPos[0] + 1, lastPos[1] + 1];

  console.log('matrix[pos[0]][pos[1]]: ', matrix[pos[0]][pos[1]]);
  // 检查当前位置是否为0
  if (matrix[pos[0]][pos[1]] !== 0) return pos;

  // 当前位置为0，且下方所有元素均为0，则右移
  else pos[1] += 1;
  return pos;
}

export function copyMatrix(matrix) {
  return JSON.parse(JSON.stringify(matrix));
}
