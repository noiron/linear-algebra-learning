import { useEffect, useState } from 'react';
import './App.css';
import Matrix from './components/matrix';
import { findPivotPos, replacement } from './utils';

function copyMatrix(matrix) {
  return JSON.parse(JSON.stringify(matrix));
}

function App() {
  let matrix = [
    // [1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9],

    [3, -9, 12, -9, 6, 15],
    [3, -7, 8, -5, 8, 9],
    [0, 3, -6, 6, 4, -5]

    // [1, -2, -1, 3, 0],
    // [-2, 4, 5, -5, 3],
    // [3, -6, -6, 8, 2],
  ];

  const [steps, setSteps] = useState([matrix]);
  const pivots: [number, number] = [0, 0];

  /**
   * 根据主元所在位置化简下方的行
   * @param rowIdx
   * @param colIdx
   * @returns
   */
  function reduceRows(rowIdx: number, colIdx: number) {
    const newMatrix = copyMatrix(matrix);

    // 从主元行的下一行开始
    for (let i = rowIdx + 1; i < newMatrix.length; i++) {
      const row = newMatrix[i];
      const times = row[colIdx] / newMatrix[rowIdx][rowIdx];
      replacement(newMatrix[rowIdx], row, -times);
    }

    return newMatrix;
  }

  useEffect(() => {
    while (pivots[0] < matrix.length && pivots[1] < matrix[0].length) {
      const reducedMatrix = reduceRows(pivots[0], pivots[1]);
      [pivots[0], pivots[1]] = findPivotPos(matrix, pivots);
      setSteps((steps) => [...steps, reducedMatrix]);
      matrix = reducedMatrix;
    }
  }, []);

  return (
    <div className="App">
      {steps.map((step) => {
        return <Matrix matrix={step} />;
      })}
    </div>
  );
}

export default App;
