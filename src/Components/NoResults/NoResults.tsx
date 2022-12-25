import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";

const NoResults = () => {
  return (
    <Container>
      <MessageHold>
        {/* <Back to="/">ret</Back> */}
        <Icon>⚠</Icon>
        <div>
          No Results For This Search
          <br />
          Refresh to see avaiable all results
        </div>
      </MessageHold>
    </Container>
  );
};

export default NoResults;

const Container = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;
const MessageHold = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 20px;
  background-color: #f4f5d6dc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  font-size: 20px;
  position: relative;
  div {
    text-align: center;
  }
`;
const Icon = styled.div`
  margin-bottom: 20px;
  font-size: 80px;
`;

const Back = styled(NavLink)`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 13px;
  left: 20px;
`;
