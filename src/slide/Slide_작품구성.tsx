import { Heading, Slide } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_작품구성 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading
        fontSize="h3"
        style={{ transform: "translateY(-30px)" }}
      >
        혼란스러운 AI시대,
        <br />
        우리는 누구의{" "}
        <span style={{ color: "#c0392b", fontWeight: "bold" }}>의지</span>
        로 살고 있을까?
      </Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          width: "95%",
          margin: "0 auto 30px",
          transform: "translateY(-40px)"
        }}
      >
        <CustomCard
          style={{
            flex: 1,
            padding: "35px",
            textAlign: "center",
            minHeight: "400px",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d1d1f" }}>
              미래의 예측 (불안)
            </div>
          </div>
          <div style={{ width: "70%", borderTop: "1px solid #d2d2d7" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d1d1f" }}>
              타인의 의견
            </div>
          </div>
        </CustomCard>

        <CustomCard
          style={{
            flex: 1,
            padding: "35px",
            textAlign: "center",
            minHeight: "400px",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d1d1f" }}>
              현재의 실천 (확신)
            </div>
          </div>
          <div style={{ width: "70%", borderTop: "1px solid #d2d2d7" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d1d1f" }}>
              나의 의지
            </div>
          </div>
        </CustomCard>
      </div>
    </Slide>
  );
};