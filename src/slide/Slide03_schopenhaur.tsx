import { Heading, Slide } from "spectacle";

export const Slide03_schopenhaur = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading fontSize="h3">세상은 무엇으로<br/>이루어져 있는가?</Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          width: "85%",
          height: "75%",
          margin: "0 auto",
          transform: "translateY(-10px)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/쇼펜하우어.jpg"
            alt="철학자 쇼펜하우어"
            style={{
              display: "block",
              width: "250px",
              height: "360px",
              objectFit: "contain",
              margin: "0 auto 20px",
              boxShadow: "0 16px 30px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ fontSize: "1.5rem", color: "#1d1d1f" }}>
            아르투어 쇼펜하우어
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "250px",
              margin: "0 auto 20px",
              paddingRight: "10px",
              paddingBottom: "8px",
              backgroundColor: "#c9c4bb",
              boxShadow: "18px 22px 30px rgba(0, 0, 0, 0.25)",
              transform: "perspective(1000px) rotateY(-15deg)",
              transformOrigin: "left center",
            }}
          >
            <img
              src="/의지와표상 표지.jpg"
              alt="의지와 표상으로서의 세계 책 표지"
              style={{
                display: "block",
                width: "100%",
                maxHeight: "420px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ fontSize: "1.5rem", color: "#1d1d1f" }}>
            《의지와 표상으로서의 세계》
          </div>
        </div>
      </div>
    </Slide>
  );
};