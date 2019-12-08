import React from "react";
import { Modal, ModalContent, ModalButton, Title, Span } from "../styles/style";

const FullModal = ({ ingred, method}) => {
  return (
    <Modal>
        <ModalButton>&#215;</ModalButton>
      <ModalContent>
        <Title>cake</Title>
        <Span>ingredients</Span>
         {ingred}
    
        <Span>Method</Span>
    
          {method}
        
      </ModalContent>
    </Modal>
  );
};
export default FullModal;
