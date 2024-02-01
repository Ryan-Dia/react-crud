import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { styled } from 'styled-components';
import List from './components/List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [Lists, setLists] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const calcTotalPrice = () => {
    return Lists.reduce((total, item) => (total += Number(item.price)), 0);
  };

  return (
    <div className='App'>
      {isSubmitted && <div className='submitted'>제출 완료</div>}
      {isEdited && <div className='editted'>수정 완료</div>}
      <h1 className='main-title'>예산 계산기</h1>

      <div className='container'>
        <RowFlexDiv>
          <Input title='지출항목' type='string' name={category} setter={setCategory} />
          <Input title='비용' type='number' name={price} setter={setPrice} />

          {isEdit ? (
            <Button
              title='수정'
              id={editingId}
              setEditingId={setEditingId}
              price={price}
              category={category}
              Lists={Lists}
              setLists={setLists}
              setCategory={setCategory}
              setPrice={setPrice}
              className='submitButton'
              setIsEdit={setIsEdit}
              setIsEdited={setIsEdited}
            />
          ) : (
            <Button
              title='제출'
              id={uuidv4()}
              price={price}
              category={category}
              Lists={Lists}
              setLists={setLists}
              setCategory={setCategory}
              setPrice={setPrice}
              className='submitButton'
              setIsSubmitted={setIsSubmitted}
            />
          )}
        </RowFlexDiv>
        <div className='lists'>
          {Lists.map((item) => {
            return (
              <List
                id={item.id}
                category={item.category}
                price={item.price}
                setCategory={setCategory}
                setPrice={setPrice}
                Lists={Lists}
                setLists={setLists}
                setIsEdit={setIsEdit}
                setEditingId={setEditingId}
              />
            );
          })}
        </div>
        <Button
          title='목록지우기'
          id={uuidv4()}
          price={price}
          category={category}
          Lists={Lists}
          setLists={setLists}
          className='deleteButton'
        />
      </div>

      <h2 className='total'>총지출 : {calcTotalPrice()}원</h2>
    </div>
  );
}

export default App;

const RowFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;
