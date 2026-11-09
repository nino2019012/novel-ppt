import React from "react";
import { createRoot } from "react-dom/client";
import {
  Slide,
  Heading,
  Grid,
} from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide02 = () => {
  const [showNunuImage, setShowNunuImage] = React.useState(false);
  return (
    <Slide backgroundColor="tertiary">
      <Grid
        gridTemplateColumns="1fr 1fr"
        gridGap={40}
        width="85%"
        style={{ margin: "0 auto" }}
      >
        <CustomCard>
          <div>
            <img
              src="/지누 이름 확대.jpg"
              alt="지누"
              style={{
                display: "block",
                height: "100px",
                maxWidth: "100%",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
          <img
            src="/지누.jpg"
            alt="지누 사진"
            style={{
              display: "block",
              width: "100%",
              height: "400px",
              objectFit: "contain",
            }}
            />
            </div>
        </CustomCard>
        

        <CustomCard>
          <div>
          <button
            type="button"
            aria-label="누누 글씨와 직접 쓴 이름 전환"
            onClick={() => setShowNunuImage((current) => !current)}
            style={{
              display: "block",
              border: 0,
              background: "none",
              padding: 0,
              margin: "0 auto",
              cursor: "pointer",
            }}
          >
            {showNunuImage ? (
              <img
                src="/누누 이름.png"
                alt="직접 쓴 누누"
                style={{ display: "block", height: "165px", width: "auto", maxWidth: "100%" }}
              />
            ) : (
              <span style={{ display: "block", height: "165px", lineHeight: "100px", fontSize: "2.5rem" }}>
                누누
              </span>
            )}
          </button>
          <img
            src="/누누.jpg"
            alt="두 번째 책 표지"
            style={{
              display: "block",
              width: "100%",
              height: "400px",
              objectFit: "contain",
            }}
          />
          </div>
        </CustomCard>
      </Grid>
    </Slide>
  );
};