import styled from 'styled-components';

const NameWrapper = styled.div`
  position: relative;
  padding-left: 38px;
  padding-right: 38px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  ${({ isOverEditBlock, isOverRemove, isSelected }) => {
    if (isOverRemove) {
      return `
      color: #f64d0a
    `;
    }

    if (isSelected || isOverEditBlock) {
      return `
      color: #007eff
    `;
    }
  }}
`;

export default NameWrapper;
