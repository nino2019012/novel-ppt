import { Heading, Slide } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_작품구성 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading>작품의 의도</Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          width: "95%",
          margin: "0 auto 30px",
        }}
      >
        <CustomCard
          style={{
            flex: 1,
            padding: "35px",
            textAlign: "center",
            minHeight: "400px"
          }}
        >
          <div style={{ fontSize: "2rem", color: "#86868b" }}>
            첫 번째 질문
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#1d1d1f",
            }}
          >
            세상은 무엇으로<br />이루어져 있는가?
          </div>
        </CustomCard>

        <CustomCard
          style={{
            flex: 1,
            padding: "35px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", color: "#86868b" }}>
            두 번째 질문
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#1d1d1f",
            }}
          >
            그 세상에서<br />무엇을 해야 하는가?
          </div>
        </CustomCard>
      </div>
    </Slide>
  );
};