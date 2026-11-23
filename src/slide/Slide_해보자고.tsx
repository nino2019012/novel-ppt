import React from "react";
import { Slide, Image, Heading } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_해보자고 = () => {
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
        transform: "translateY(-30px)",
        textAlign: "center",
      }}
    >
      <span style={{ color: "#1d1d1f" }}>의지의 긍정</span>
    </Heading>

    <CustomCard
      style={{
        width: "60%",
        maxWidth: "900px",
        transform: "translateY(-50px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src="/해보자고.gif"
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