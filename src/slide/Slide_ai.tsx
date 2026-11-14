import React from "react";
import { Slide, FlexBox, Image } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_ai = () => {
  return (
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%">
        <CustomCard>
          <div
            style={{
              display:"flex",
              flexDirection:"column",
              alignItems: "center",
              gap: "16px"
            }}>
            <Image
              src="/맹목의 세계.png"
              height={500}
              style={{
                objectFit:"contain",
                borderRadius: "20px",
              }}
            />
            <audio controls preload="metadata">
              <source src="/audio/ai 제작.mp3" type="audio/mpeg" />
              브라우저가 오디오 재생을 지원하지 않습니다.
            </audio>
          </div>
        </CustomCard>
      </FlexBox>
    </Slide>
  );
};