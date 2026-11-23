
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
        <Heading>
          영원회귀
        </Heading>

        {/* 작품 카드 */}
        <CustomCard
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            gap: "10px",
            transform: "translateY(-30px)"
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

          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            외젠 들라크루아 -파우스트 앞에 나타난 메피스토펠레스
          </div>
        </CustomCard>

        {/* 오디오 영역 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "55%",
            marginTop: "5px",
            transform: "translateY(-30px)"
          }}
        >
          <audio
            controls
            preload="metadata"
            style={{
              width: "100%",
            }}
          >
            <source
              src="/audio/즐거운학문.mp3"
              type="audio/mpeg"
            />
            브라우저가 오디오 재생을 지원하지 않습니다.
          </audio>
        </div>
      </FlexBox>
    </Slide>
  );
};
