//import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { BarChart, PieChart, LineChart } from "@mui/x-charts";

export default function BasicCard() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item xs={1} md={2}>
        <Card
          sx={{
            width: 275,
            height: 230,
            top: 175,
            left: 10,
            borderRadius: 5,
            border: 1,
            background:
              "linear-gradient(0deg,#04396C, #04396C), linear-gradient(0deg, #04396C, #04396C)",
            marginLeft: "30px", // Apply negative margin
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h8"
              component="div"
              color={"#84C1FF"}
              textAlign={"left"}
            >
              Total Students 400
            </Typography>

            <PieChart
              series={[
                {
                  data: [
                    { name: "group A", value: 4 },
                    { name: "group B", value: 3 },
                    { name: "group C", value: 5 },
                  ],
                  innerRadius: 27,
                  outerRadius: 60,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                  cx: 75,
                  cy: 70,
                },
              ]}
              width={180}
              height={150}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} md={2}>
        <Card
          sx={{
            width: 275,
            height: 230,
            top: 175,
            left: 10,
            borderRadius: 5,
            border: 1,
            background:
              "linear-gradient(0deg,#04396C, #04396C), linear-gradient(0deg, #04396C, #04396C)",
            marginLeft: "182px", // Apply negative margin
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h8"
              component="div"
              color={"#84C1FF"}
              textAlign={"left"}
            >
              New Students 150
            </Typography>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} md={2}>
        <Card
          sx={{
            width: 275,
            height: 230,
            top: 175,
            left: 10,
            borderRadius: 5,
            border: 1,
            background:
              "linear-gradient(0deg,#04396C, #04396C), linear-gradient(0deg, #04396C, #04396C)",
            marginLeft: "335px", // Apply negative margin
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h8"
              component="div"
              color={"#84C1FF"}
              textAlign={"left"}
            >
              Total Corses 75
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
