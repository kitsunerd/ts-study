interface RiotAccountDto {
  puuid: string;
  gameName: string;
  tagLine: string;
}

interface RiotSummonerDto {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}

interface ResponseError {
  status: {
    message: string;
    status_code: number;
  };
}
