import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 15rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid white;
`;

const handleSubmit = (event, ...props) => {
  event.preventDefault();
  console.log(props);
};

const Search = (history) => (
  <Container>
    <Form onSubmit={handleSubmit} history={history}>
      <Input placeholder="🔍SEARCH"></Input>
    </Form>
  </Container>
);

export default withRouter(({ history }) => Search(history));
