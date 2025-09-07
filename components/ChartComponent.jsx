"use client";

import { useState, useEffect } from "react";
import { data } from "../data/data";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "../style/colour";

const ChartComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transformDataForChart = (data) => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    );

    return sortedData.map((item) => ({
      date: new Date(item.Date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      dateShort: new Date(item.Date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      kwhUsed: item["Total kWhs Used"],
      temperature: item["Avg Daily Temperature"].toFixed(2),
    }));
  };

  const chartData = transformDataForChart(data);

  return (
    <div className="w-full h-64 sm:h-72 lg:h-96 p-2 lg:p-4 ">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 60,
          }}
        >
          <Legend
            verticalAlign="top"
            height={isMobile ? 30 : 36}
            wrapperStyle={{
              paddingBottom: isMobile ? "30px" : "50px",
              fontSize: isMobile ? "12px" : "20px",
            }}
          />
          <CartesianGrid stroke={COLORS.grid} strokeDasharray="3 3" />

          <XAxis
            dataKey={isMobile ? "dateShort" : "date"}
            tick={{ fontSize: isMobile ? 10 : 12 }}
            interval={isMobile ? 1 : 0}
            angle={-60}
            textAnchor={"end"}
            height={isMobile ? 60 : 40}
            label={{
              value: "Date",
              position: "insideBottom",
              offset: isMobile ? -10 : -50,
              fontSize: 14,
              fontWeight: "bold",
            }}
            axisLine={{ stroke: COLORS.grid }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            label={{
              value: isMobile ? "kWh" : "kWh Used",
              angle: -90,
              position: "insideLeft",
              style: {
                textAnchor: "middle",
                fontWeight: "bold",
              },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: isMobile ? 10 : 12 }}
            label={{
              value: isMobile ? "Temp°C" : "Temperature (°C)",
              angle: 90,
              position: "insideRight",
              style: {
                textAnchor: "middle",
                fontWeight: "bold",
              },
            }}
          />
          <Tooltip />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="temperature"
            stroke={COLORS.secondary}
            strokeWidth={2}
            dot={{ fill: COLORS.secondary, r: isMobile ? 2 : 5 }}
            name="Average Temperature"
          />
          <Bar
            yAxisId="left"
            dataKey="kwhUsed"
            fill={COLORS.primary}
            name="Total kWhs Used"
            opacity={0.95}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
