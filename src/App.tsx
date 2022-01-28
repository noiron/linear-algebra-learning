import { useEffect, useState } from 'react';
import './App.css';
import Matrix from './components/matrix';
import { copyMatrix, findPivotPos, replacement } from './utils';

// 步骤
// 1. 找到主元位置
// 2. 化简主元下方的所有行
// 3. 寻找下一个主元

function App() {
  let matrix = [
    // [1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9],

    [3, -9, 12, -9, 6, 15],
    [3, -7, 8, -5, 8, 9],
    [0, 3, -6, 6, 4, -5],

    // [1, -2, -1, 3, 0],
    // [-2, 4, 5, -5, 3],
    // [3, -6, -6, 8, 2],
  ];

  // TODO: 定义 ROW 和 COL 常量

  const [steps, setSteps] = useState([matrix]);
  let pivots: [number, number] = [-1, -1];

  /**
   * 根据主元所在位置化简下方的行
   * @param rowIdx
   * @param colIdx
   * @returns
   */
  function reduceRows(rowIdx: number, colIdx: number) {
    const newMatrix = copyMatrix(matrix);
    const pivot = newMatrix[rowIdx][colIdx];

    // 从主元行的下一行开始处理
    for (let i = rowIdx + 1; i < newMatrix.length; i++) {
      const row = newMatrix[i];
      const times = -row[colIdx] / pivot;
      replacement(row, newMatrix[rowIdx], times);
    }

    return newMatrix;
  }

  useEffect(() => {
    // TODO: 停止条件需要修改
    // TODO: 将生成 step 的步骤放入 utils 中
    while (pivots[0] < matrix.length - 1 && pivots[1] < matrix[0].length - 1) {
      pivots = findPivotPos(matrix, pivots);
      matrix = reduceRows(pivots[0], pivots[1]);
      setSteps((steps) => [...steps, matrix]);
    }
  }, []);

  return (
    <div className="App">
      {steps.map((step, index) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {index > 0 ? <span>~</span> : <span>&nbsp;</span>}
            <Matrix matrix={step} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
