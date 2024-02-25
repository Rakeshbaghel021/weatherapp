import React from "react";
import { Grid } from "@mui/material";
import { getDayMonthFromDate } from "../../../utilities/DatetimeUtils";
import { weatherIcon } from "../../../utilities/IconsUtils";
import ErrorBox from "../../Reusable/ErrorBox";
import CityDateDetail from "./CityDateDetail";
import TemperatureWeatherDetail from "./TemperatureWeatherDetail";
import WeatherIconDetail from "./WeatherIconDetail";
import Layout from "../../Reusable/Layout";

const dayMonth = getDayMonthFromDate();

const Details = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === "404";

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <Grid
          style={{ backgroundColor: "black", marginTop: ".8rem" }}
          item
          xs={4}
          sx={{
            padding: "2px 0 2px",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            borderRadius: "8px",
          }}
        >
          <CityDateDetail city={data.city} date={dayMonth} />
        </Grid>
        <Grid
          style={{ backgroundColor: "black", marginTop: ".8rem" }}
          item
          xs={4}
          sx={{
            padding: "2px 0 2px",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            borderRadius: "8px",
          }}
        >
          <TemperatureWeatherDetail
            temperature={data.main.temp}
            description={data.weather[0].description}
          />
        </Grid>
        <Grid
          style={{ backgroundColor: "black", marginTop: ".8rem" }}
          item
          xs={4}
          sx={{
            padding: "2px 0 2px",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            borderRadius: "8px",
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} />
        </Grid>
      </>
    );

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;
