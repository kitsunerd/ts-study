import React, { useState } from "react";
import { MainPagePresenter } from "./presenter";
import { api } from "api/urls";
import { AxiosError } from "axios";

export const MainPageContainer = () => {
  const [summonerName, setSummonerName] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [opggUrls, setOpggUrls] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const initialize = () => {
    setOpggUrls([]);
    setErrorMessage("");
    setTeamName("");
  };

  const getClashTeamPlayers = async (summonerName: string) => {
    try {
      const summonerDto = await getSummonerDtoByName(summonerName);
      const clashPlayerDto = await getClashPlayerDtoBySummId(summonerDto.id);
      const clashTeamDto = await getClashTeamDto(clashPlayerDto[0]?.teamId);
      const getClashPlayerApis = clashTeamDto.players.map((player) =>
        getSummonerDtoByAccount(player.summonerId)
      );
      const clashPlayers = await Promise.all(getClashPlayerApis);
      const urls = clashPlayers.map(
        (player) => `https://jp.op.gg/summoner/userName=${player.name}`
      );
      setTeamName(clashTeamDto.name);
      setOpggUrls(urls);
    } catch (e: unknown) {
      setErrorMessage((e as Error).message);
    }
  };

  const getSummonerDtoByName = async (summonerName: string) => {
    const dto = await api
      .getSummonerDtoByName(summonerName)
      .then((response) => response.data)
      .catch((err: AxiosError) => {
        // TODO: AxiosError以外の可能性があるので、AxiosErrorかどうかの判定を入れる
        throw new Error(err.message);
      });
    return dto;
  };

  const getClashPlayerDtoBySummId = async (summonerId: string) => {
    const dto = await api
      .getClashPlayerDtoBySummId(summonerId)
      .then((response) => response.data)
      .catch((err: AxiosError) => {
        // TODO: AxiosError以外の可能性があるので、AxiosErrorかどうかの判定を入れる
        throw new Error(err.message);
      });
    return dto;
  };

  const getClashTeamDto = async (teamId: string) => {
    const dto = await api
      .getClashTeamDto(teamId)
      .then((response) => response.data)
      .catch((err: AxiosError) => {
        // TODO: AxiosError以外の可能性があるので、AxiosErrorかどうかの判定を入れる
        throw new Error(err.message);
      });
    return dto;
  };

  const getSummonerDtoByAccount = async (accountId: string) => {
    const dto = await api
      .getSummonerDto(accountId)
      .then((response) => response.data)
      .catch((err: AxiosError) => {
        // TODO: AxiosError以外の可能性があるので、AxiosErrorかどうかの判定を入れる
        throw new Error(err.message);
      });
    return dto;
  };

  const setStateToHandleChange =
    (callback: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      callback(e.target.value);
    };

  const handleChangeSummonerName = setStateToHandleChange(setSummonerName);
  const handleSubmit = () => {
    initialize();
    getClashTeamPlayers(summonerName);
  };
  return (
    <MainPagePresenter
      handleChangeSummonerName={handleChangeSummonerName}
      handleSubmit={handleSubmit}
      teamName={teamName}
      opggUrls={opggUrls}
      errorMessage={errorMessage}
    />
  );
};
