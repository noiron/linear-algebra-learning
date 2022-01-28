import styled from 'styled-components';
import { MatrixType, Row } from '../interface';

const Box = styled.div`
  margin: 20px;
  border: 1px solid #000;
  max-width: fit-content;
`;

const StyledRow = styled.p`
  display: flex;
  max-width: fit-content;

  span {
    width: 100px;
  }
`;

interface IProps {
  matrix: MatrixType;
}

const Matrix = ({ matrix }: IProps) => {
  return (
    <Box>
      {matrix.map((row, index) => {
        return (
          <StyledRow key={index}>
            {row.map((entry, index) => {
              return <span key={index}>{entry}</span>;
            })}
          </StyledRow>
        );
      })}
    </Box>
  );
};

export default Matrix;
