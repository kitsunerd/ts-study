import axios from "axios";

const getAccountDto = async (userName: string, tagLine: string) => {
  return axios.get<RiotAccountDto>(
    `${process.env.REACT_APP_RIOT_ASIA_URL}/riot/account/v1/accounts/by-riot-id/${userName}/${tagLine}`
  );
};

const getSummonerDto = async (summonerId: string) => {
  return axios.get<RiotSummonerDto>(
    `${process.env.REACT_APP_RIOT_JP_URL}/lol/summoner/v4/summoners/${summonerId}`
  );
};

const getSummonerDtoByName = async (summonerName: string) => {
  return axios.get<RiotSummonerDto>(
    `${process.env.REACT_APP_RIOT_JP_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`
  );
};

const getClashPlayerDtoBySummId = async (summonerId: string) => {
  return axios.get<RiotClashPlayerDto[]>(
    `${process.env.REACT_APP_RIOT_ASIA_URL}/lol/clash/v1/players/by-summoner/${summonerId}`
  );
};

const getClashTeamDto = async (teamId: string) => {
  return axios.get<RiotClashTeamDto>(
    `${process.env.REACT_APP_RIOT_ASIA_URL}/lol/clash/v1/teams/${teamId}`
  );
};

export const api = {
  getAccountDto,
  getSummonerDto,
  getSummonerDtoByName,
  getClashPlayerDtoBySummId,
  getClashTeamDto,
};
