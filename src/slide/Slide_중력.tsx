import React from "react";
import { Appear, Heading, Slide } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_중력 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading
      fontSize="h3"
      style={{ transform: "translateY(-20px)" }}
      >
        같은 낙하, 서로 다른 질문
      </Heading>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "28px",
          width: "92%",
          height: "80%",
          margin: "0 auto",
          transform: "translateY(-20px)",
        }}
      >
        <CustomCard
          style={{
            flex: "0 0 48%",
            padding: "20px",
            overflow: "hidden",
          }}
        >
          <img
            src="/중력-지누.png"
            alt="캐릭터가 중력에 의해 아래로 떨어지는 모습"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </CustomCard>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "28px",
            height: "100%"
          }}
        >
          <div
            style={{ flex: 1, minHeight: 0, width: "100%" }}
          >
            <Appear
              activeStyle={{
                opacity: 1,
                width: "100%",
                height: "100%",
                minWidth: 0,
                minHeight: 0,
              }}
              inactiveStyle={{
                opacity: 0,
                width: "100%",
                height: "100%",
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <CustomCard
                style={{
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "24px 32px",
                }}
              >
                <div style={{ fontSize: "1.15rem", color: "#86868b" }}>
                  현대 과학 · 만유인력의 법칙
                </div>
                <div
                  aria-label="F 아래첨자 g는 G 곱하기 m 1 곱하기 m 2 나누기 r 제곱"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    margin: "20px 0",
                    color: "#1d1d1f",
                    fontFamily: "Georgia, serif",
                    fontSize: "3.2rem",
                    fontStyle: "italic",
                  }}
                >
                  <span>
                    F<sub style={{ fontSize: "0.55em" }}>g</sub> = G
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: 1.1,
                    }}
                  >
                    <span style={{ padding: "0 10px 5px" }}>
                      m<sub style={{ fontSize: "0.55em" }}>1</sub>m
                      <sub style={{ fontSize: "0.55em" }}>2</sub>
                    </span>
                    <span
                      style={{
                        width: "100%",
                        borderTop: "2px solid currentColor",
                      }}
                    />
                    <span style={{ paddingTop: "5px" }}>
                      r<sup style={{ fontSize: "0.55em" }}>2</sup>
                    </span>
                  </span>
                </div>
              </CustomCard>
            </Appear>
          </div>

          <div
            style={{ flex: 1, minHeight: 0, width: "100%" }}
          >
            <Appear
              activeStyle={{
                opacity: 1,
                width: "100%",
                height: "100%",
                minWidth: 0,
                minHeight: 0,
              }}
              inactiveStyle={{
                opacity: 0,
                width: "100%",
                height: "100%",
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <CustomCard
                style={{
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  alignItems: "center",
                  padding: "24px 32px",
                }}
              >
                <div style={{ fontSize: "1.15rem", color: "#86868b" }}>
                  쇼펜하우어 · 자연의 근원은 무엇인가?
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#1d1d1f",
                  }}
                >
                  맹목적인 의지
                </div>
              </CustomCard>
            </Appear>
          </div>
        </div>
      </div>
    </Slide>
  );
};