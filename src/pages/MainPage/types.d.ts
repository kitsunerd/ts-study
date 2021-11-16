type PresenterProps = {
  handleChangeSummonerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  summonerDto: RiotSummonerDto;
  errorMessage: string;
};
