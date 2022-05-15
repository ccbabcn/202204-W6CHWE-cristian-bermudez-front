import styled from "styled-components";

export const RobotStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  .robot {
    display: flex;
    flex-direction: column;
    width: 300px;

    img {
      object-fit: cover;
    }
  }
`;
