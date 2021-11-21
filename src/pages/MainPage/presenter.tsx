import { Fragment } from "react";

export const MainPagePresenter = (props: PresenterProps) => {
  const {
    handleChangeSummonerName,
    handleSubmit,
    opggUrls,
    teamName,
    errorMessage,
  } = props;
  return (
    <div>
      <span>サモナーネーム</span>
      <input type="text" name="user-name" onChange={handleChangeSummonerName} />
      <input type="button" value="送信" onClick={handleSubmit} />
      <div>
        <span>team name</span>
        <br />
        {teamName}
        <br />
        <span>opgg urls</span>
        <br />
        {opggUrls.map((url, i) => (
          <Fragment key={i}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
            <br />
          </Fragment>
        ))}
        <br />
        <br />
        {errorMessage && (
          <>
            <span>error message</span>
            <br />
            {errorMessage}
          </>
        )}
      </div>
    </div>
  );
};
