import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled>
      <div
        className="loader"
        role="contentinfo"
        aria-label="The page is loading"
      ></div>
    </LoadingStyled>
  );
};

export default Loading;
