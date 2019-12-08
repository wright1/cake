import React from "react";
import {
  Modal,
  ModalContent,
  ModalButton,
  Title,
  ModalSpan
} from "../styles/style";

const FullModal = ({ onClick, title, ingredient, method }) => {
  return (
    <Modal>
      <ModalButton onClick={e => onClick(e)}>&#215;</ModalButton>
      <ModalContent>
        <Title>{title}</Title>
        <ModalSpan>ingredients</ModalSpan>
        {ingredient}
        <ModalSpan>Method</ModalSpan>
        {method}
      </ModalContent>
    </Modal>
  );
};
export default FullModal;
