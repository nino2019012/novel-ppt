import React from "react";
import { Slide, FlexBox, Image, Heading } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_영원회귀 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            textAlign: "center",
            transform: "translateY(-10px)"
          }}
        >
          <span
            style={{
              color: "#1d1d1f",
              paddingBottom: "5px",
              borderBottom: "1px solid #d2d2d7",
              fontSize: "0.8em"
            }}
          >
            영원회귀
          </span>
          <span style={{ fontSize: "0.6em" }}>
            다음 생에도 지금과 똑같은 삶이 반복된다
          </span>
        </Heading>

        <CustomCard
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            gap: "10px",
            transform: "translateY(-40px)",
          }}
        >
          <Image
            src="/파우스트.png"
            height={500}
            style={{
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          <audio
            controls
            preload="metadata"
            style={{
              width: "100%",
            }}
          >
            <source src="/audio/즐거운학문.mp3" type="audio/mpeg" />
            브라우저가 오디오 재생을 지원하지 않습니다.
          </audio>
        </CustomCard>
      </FlexBox>
    </Slide>
  );
};