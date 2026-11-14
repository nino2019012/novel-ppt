import { FlexBox, Heading, Slide } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide_작품구성 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading
        fontSize="h3"
        style={{
          transform: "translateY(-30px)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <span style={{color:"#1d1d1f"}}>소설의 주제</span>
        과연 나는 나의 의지대로 살고 있는가?
      </Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          width: "100%",
          margin: "0 auto 30px",
          transform: "translateY(-10px)"
        }}
      >
        <CustomCard
          style={{
            flex: 1,
            padding: "35px",          
            minHeight: "400px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection:"column",
            textAlign: "center",
          }}
        >
          <div
              style={{
                flex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3.5rem",
              }}>
            타인의 기준
          </div>
          <div 
              style={{
                width: "70%",
                borderTop: "1px solid #d2d2d7",
                 }} 
                />
          <div
              style={{
                flex:1,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"2em",
              }}>
            안정적인 직장, 고액 연봉 등
          </div>
        </CustomCard>

        <CustomCard
          style={{
            flex:1,
            padding: "35px",          
            minHeight: "400px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection:"column",
            textAlign: "center",
          }}>
          <div
            style={{
              flex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3.5rem",
            }}>
            자신의 기준
          </div>
          <div 
              style={{
                width: "70%",
                borderTop: "1px solid #d2d2d7",
                 }} 
            />
            <div
              style={{
                flex:1,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"2em",
              }}>
            창업, 예술, 취미 등
          </div>

        </CustomCard>
      </div>
    </Slide>
  );
};