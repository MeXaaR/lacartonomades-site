import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  line-height: 2;
  height: 3.5rem;
  text-decoration: none;
  color: #FFFFFF;
  background-color: #3e9f74;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: boris;
  max-width: fit-content;
  margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.div`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 1rem;
  vertical-align: middle;
`;

function Brocoli() {
    return (
        <Button target="_blank" href="https://www.buymeacoffee.com/mexar">
            <Image>🥦</Image>
            <Text>En route pour un Brocoli</Text>
        </Button>
    );
}

export default Brocoli;
