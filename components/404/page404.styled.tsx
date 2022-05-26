import styled from 'styled-components';

export const AE86Wrapper = styled.div`
  border: .1em solid black;
  width: 55vw;
  height: 25vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8vw;
  & > div {
    height: inherit;
    width: inherit;
    display: block;
    position: relative;
    border: .1em solid black;
    border-left: .2em solid;
    border-right: .2em solid;
  }
`;

export const Wrapper404 = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ae86;
  & > h2 {
    margin-bottom: 35vh;
    & > span {
        &:hover {
            opacity: 0.5;
        }
    }
  }
`;
