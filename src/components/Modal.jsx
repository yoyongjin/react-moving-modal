import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const ModalContainer = styled.div`
  box-sizing: border-box;
  width: 430px;
  height: 480px;
  background-color: #fff;
  /* padding: 8px 16px; */
`;
const ModalHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 35px;
  background-color: #496cd2;
  padding: 8px 10px;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

const CloseBtn = styled.button`
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 5px;
`;

const STTHeaderContainer = styled.div`
  display: flex;
  /* background-color: #bbb; */
  justify-content: space-between;
  font-size: 14px;
`;
const TeamInfo = styled.div`
  font-size: 12px;
`;

const STTContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
const STTContent = styled.div`
  /* background-color: lightcoral; */
  border-top: 2px solid #496cd2;
  padding: 10px 0;
`;
const LeftBalloon = styled.div`
  width: 328px;
  border: 1px solid #b1b7be;
  border-radius: 8px;
  padding: 6px;
  font-size: 12px;
`;

const Modal = () => {
  const onCloseClicked = () => {
    console.log("Modal Closed");
  };
  return (
    <Draggable>
      <ModalContainer>
        <ModalHeader>
          <span>통화 내용 실시간 STT</span>
          <CloseBtn onClick={onCloseClicked}>X</CloseBtn>
        </ModalHeader>
        <STTContainer>
          <STTHeaderContainer>
            <span>
              <b>김상담</b> 님
            </span>
            <span>00:24:07</span>
          </STTHeaderContainer>
          <TeamInfo>
            <span>AAA지점 BBB팀</span>
          </TeamInfo>
          <STTContent>
            <div>
              <LeftBalloon>asdf</LeftBalloon>
            </div>
          </STTContent>
        </STTContainer>
      </ModalContainer>
    </Draggable>
  );
};

export default Modal;
