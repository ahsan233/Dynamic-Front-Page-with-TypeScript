// AddItemForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
  margin-top: 20px;
`;

const Form = styled.form``;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddItemForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
  };

  return (
    <FormContainer>
      <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <FormTextarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <FormInput type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <FormButton type="submit">Add Item</FormButton>
      </Form>
    </FormContainer>
  );
}

export default AddItemForm;

