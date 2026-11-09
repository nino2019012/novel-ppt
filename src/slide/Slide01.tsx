import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide01 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%">
        <CustomCard>
          {/* 3D 지누 이미지만 크게 배치 */}
          <Image
            src="/15칭찬.gif"
            height={600}
            style={{ objectFit: 'contain' }}
          />
        </CustomCard>
      </FlexBox>
    </Slide>
  );
};