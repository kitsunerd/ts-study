export const MainPagePresenter = (props: PresenterProps) => {
  const { handleChangeSummonerName, handleSubmit, summonerDto, errorMessage } =
    props;
  return (
    <div>
      <span>サモナーネーム</span>
      <input type="text" name="user-name" onChange={handleChangeSummonerName} />
      <input type="button" onClick={handleSubmit} value="送信" />
      <div>
        <span>dto</span>
        <br />
        <pre>{JSON.stringify(summonerDto, null, "\t")}</pre>
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
