import styled from "styled-components";
import DragModal from "./components/DragModal";
import Modal from "./components/Modal";

const AppContainer = styled.div`
  display: flex;
  height: 97.75vh;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;

const STTBtn = styled.button`
  width: 75px;
  height: 26px;
  background-color: #49b1d2;
  border-radius: 13px;
  border: none;
  cursor: pointer;
`;

function App() {
  const conSTTClickedHandler = () => {
    console.log("asdf");
  };
  return (
    <AppContainer>
      <STTBtn onClick={conSTTClickedHandler}>STT</STTBtn>
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <DragModal />
    </AppContainer>
  );
}

export default App;
