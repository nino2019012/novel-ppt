import React from "react";
import { Slide, Image, Heading } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_도망 = () => {
  return (
    <Slide backgroundColor="tertiary">
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px"
    }}
  >
    <Heading
  fontSize="h3"
  style={{
    transform: "translateY(-50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    textAlign: "center",
  }}
>
  <span
    style={{
      color: "#1d1d1f",
      paddingBottom: "10px",
      borderBottom: "1px solid #d2d2d7",
    }}
  >
    그래서 기준은?
  </span>

  <span>
    의지의 부정
  </span>
</Heading>

    <CustomCard
      style={{
        width: "60%",
        maxWidth: "900px",
        transform: "translateY(-110px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src="/02잘가.gif"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </CustomCard>
  </div>
</Slide>
  );
};