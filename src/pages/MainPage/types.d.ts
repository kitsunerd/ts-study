type PresenterProps = {
  handleChangeSummonerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  teamName: string;
  opggUrls: string[];
  errorMessage: string;
};
