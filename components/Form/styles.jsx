import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  align-items: center;
  background-color: #25272e;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  max-width: 90%;
  padding: 20px;
  width: 500px;
`;

export const FormTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormInput = styled.input`
  border-radius: 5px;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 10px;
  transition: border 0.3s ease-in-out;
  width: 100%;

  background-color: #2b2c33;
  color: #fff;
  font-size: 16px;
  &:focus {
    border: 2px solid #2279ca;
    outline: none;
  }
`;

export const FormTextArea = styled.textarea`
  background-color: #2b2c33;
  border-radius: 5px;
  border: 2px solid transparent;
  color: #fff;
  font-size: 16px;
  height: 200px;
  padding: 5px 10px;
  resize: none;
  transition: border 0.3s ease-in-out;
  width: 100%;

  &:focus {
    border: 2px solid #2279ca;
    outline: none;
  }
`;

export const FormInputSubmit = styled.input`
  border-radius: 5px;
  border: none;
  height: 40px;
  padding: 0 10px;
  width: 100%;

  background-color: #2279ca;
  color: #fff;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const FormFileWrapper = styled.label`
  width: 100%;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: border 0.3s ease-in-out;
  padding: 0 10px;
  font-size: 16px;
  color: #fff;
  background-color: #2b2c33;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  &:focus {
    border: 2px solid #2279ca;
    outline: none;
  }
`;

export const FormLabelFile = styled.label`
  padding: 5px;
`;

export const FormInputFile = styled(FormInput)`
  margin: 0;
  padding: 0;

  &::-webkit-file-upload-button {
    display: none;
  }
`;
