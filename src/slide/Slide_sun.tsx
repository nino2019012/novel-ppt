import React from "react";
import { Heading, Slide } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_sun = () => {
  return(
    <Slide>
      <Heading
       style={{ transform: "translateY(-20px)" }}>
        끊임없이 발산하는 의지
      </Heading>

      <div
       style={{
        justifyContent:"center",
        width: "92%",
        height: "80%",
        margin: "0 auto",
        transform: "translateY(-30px)",
       }}>
        <CustomCard
         style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "20px",
          overflow: "hidden",
          gap: "12px"
         }}
        >
          <img
           src="/sun.jpg"
           alt="에드바르 뭉크 - 태양(1911)"
           style={{
            display: "block",
            flex: "1 1 0",
            minHeight: 0,
            width: "100%",
            objectFit: "contain",
           }}
          />
          <div
           style={{
            flexShrink: 0,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center"
           }}
          >에드바르 뭉크 - 태양 (1911)</div>
        </CustomCard>
      </div>
    </Slide>
  )
}