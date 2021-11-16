import React, { useState } from "react";
import { MainPagePresenter } from "./presenter";
import { getSummonerDtoByName as apiGetSummonerDtoByName } from "api/urls";
import { DEFAULT_SUMMONER_DTO } from "./consts";
import { AxiosError } from "axios";

export const MainPageContainer = () => {
  const [summonerName, setSummonerName] = useState<string>("");
  const [summonerDto, setSummonerDto] =
    useState<RiotSummonerDto>(DEFAULT_SUMMONER_DTO);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const initialize = () => {
    setSummonerDto(DEFAULT_SUMMONER_DTO);
    setErrorMessage("");
  };

  const getSummonerDtoByName = async (summonerName: string) => {
    initialize();
    const dto = await apiGetSummonerDtoByName(summonerName)
      .then((response) => response.data)
      .catch((err: AxiosError) => {
        // TODO: AxiosError以外の可能性があるので、AxiosErrorかどうかの判定を入れる
        setErrorMessage(err.message);
      });
    if (!dto) return;
    setSummonerDto(dto);
  };

  const setStateToHandleChange =
    (callback: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      callback(e.target.value);
    };

  const handleChangeSummonerName = setStateToHandleChange(setSummonerName);
  const handleSubmit = () => {
    getSummonerDtoByName(summonerName);
  };
  return (
    <MainPagePresenter
      handleChangeSummonerName={handleChangeSummonerName}
      handleSubmit={handleSubmit}
      summonerDto={summonerDto}
      errorMessage={errorMessage}
    />
  );
};
