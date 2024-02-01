import React from 'react';
import { styled } from 'styled-components';

export default function Button({
  title,
  price,
  category,
  id,
  Lists,
  setLists,
  setCategory,
  setPrice,
  setIsEdit,
  setIsEdited,
  setIsSubmitted,
}) {
  const storeLists = () => {
    setLists([...Lists, { id, price, category }]);
    setCategory('');
    setPrice(0);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const deleteLists = () => {
    setLists([]);
  };

  const editingLists = () => {
    const editObject = Lists.find((item) => item.id === id);

    editObject.price = price;
    editObject.category = category;

    setLists(Lists.map((item) => (item.id === id ? editObject : item)));
    setIsEdit(false);
    setCategory('');
    setPrice(0);
    setIsEdited(true);
    setTimeout(() => {
      setIsEdited(false);
    }, 2000);
  };

  if (title === '목록지우기') {
    return <StyledButton onClick={deleteLists}>{title}</StyledButton>;
  }
  if (title === '수정') {
    return <StyledButton onClick={editingLists}>{title}</StyledButton>;
  }
  return <StyledButton onClick={storeLists}>{title}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 5px;
  width: max-content;
  height: 30px;
  background: #d7d3f9;
  border: none;
  border-radius: 5px;
`;
