import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <div className="not-found-page__message">
        <span className="not-found-page__code">404</span>
        <span>Page not found!</span>
        <Button text="Home" />
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
