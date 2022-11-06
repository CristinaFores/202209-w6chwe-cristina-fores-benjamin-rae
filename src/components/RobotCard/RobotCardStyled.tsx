import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

export const RobotCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.6rem;
  .card-robot {
    &__image-container {
      position: relative;
    }
    &__image {
      object-fit: cover;
    }
    &__info {
      position: absolute;
      background-color: ${(props) => props.theme.backgroundColorPrimary};
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      opacity: 0;

      &:hover,
      :focus {
        opacity: 0.9;
      }
    }
    &__text {
    }
    &__title {
      display: flex;
      justify-content: center;
    }
    &__buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;

      &:hover,
      :focus {
        background-color: ${(props) => props.theme.backgroundColorPrimary};
      }
    }
  }
`;
