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

interface RiotClashPlayerDto {
  summonerId: string;
  teamId: string;
  position: string;
  role: string;
}

interface RiotClashTeamDto {
  id: string;
  tournamentId: number;
  name: string;
  iconId: number;
  tier: number;
  captain: string;
  abbreviation: string;
  players: Omit<RiotClashPlayerDto, "teamId">[];
}
