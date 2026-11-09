import React from "react";
import { Slide, FlexBox, Image } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_garden = () => {
  return (
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%">
        <CustomCard>
          {/* 3D 지누 이미지만 크게 배치 */}
          <Image
            src="/지누 정원.png"
            height={600}
            style={{
              objectFit: 'contain',
              borderRadius: "20px"
            }}
          />
        </CustomCard>
      </FlexBox>
    </Slide>
  );
};