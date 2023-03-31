import styled from 'styled-components';

export const TeamCardWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffa800;
  & img {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  padding: 25px;
  background: #9fbdbf;
`;

export const Name = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: rgba(255, 168, 0, 0.92);
`;

export const Status = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: #3a3a3a;
`;
