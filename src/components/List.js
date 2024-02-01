import React from 'react';
import { styled } from 'styled-components';

export default function List({
  id,
  category,
  price,
  setCategory,
  setPrice,
  Lists,
  setLists,
  setEditingId,
  setIsEdit,
}) {
  const deleteItem = () => {
    setLists(Lists.filter((item) => item.id !== id));
  };

  const editItem = () => {
    setCategory(category);
    setPrice(price);
    setIsEdit(true);
    setEditingId(id);
  };
  return (
    <Div>
      <span>{category}</span>
      <span>{price}</span>

      <div>
        <StyledButton onClick={editItem}>수정</StyledButton>
        <StyledButton onClick={deleteItem}>삭제</StyledButton>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin: 10px 10px;
  display: flex;
  width: 90%;
  height: 50px;
  justify-content: space-between;
  border: 1px solid #b3b0d5;
  color: black;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
`;

const StyledButton = styled.button`
  margin: 5px;
  width: max-content;
  height: 30px;
  background: #d7d3f9;
  border: none;
  border-radius: 5px;
`;
