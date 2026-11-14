import React from "react";
import { Slide, Image, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_의지 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <CustomCard>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "600px",
          }}
        >
          {/* 처음부터 보이는 이미지 */}
          <Image
            src="/의지.png"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />

          {/* 다음 단계에서 위에 나타나는 이미지 */}
          <Appear>
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
              }}
            >
              <Image
                src="/지누 의지.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Appear>
        </div>
      </CustomCard>
    </Slide>
  );
};