import axios from "axios";

export const getAccountDto = async (userName: string, tagLine: string) => {
  return axios.get<RiotAccountDto>(
    `${process.env.REACT_APP_RIOT_ASIA_URL}/riot/account/v1/accounts/by-riot-id/${userName}/${tagLine}`
  );
};

export const getSummonerDtoByName = async (summonerName: string) => {
  return axios.get<RiotSummonerDto>(
    `${process.env.REACT_APP_RIOT_JP_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`
  );
};
