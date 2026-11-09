import { Heading, Slide } from "spectacle";

export const Slide_nietche = () => {
  return (
    <Slide backgroundColor="tertiary">
      <Heading fontSize="h3" color="primary">그 세상에서<br/>무엇을 해야 하는가?</Heading>

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
            src="/니체.webp"
            alt="철학자 프리드리히 니체"
            style={{
              display: "block",
              width: "280px",
              height: "420px",
              objectFit: "contain",
              margin: "0 auto 20px",
              boxShadow: "0 16px 30px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ fontSize: "1.5rem", color: "#1d1d1f" }}>
            프리드리히 니체
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
              src="/차라투스트라 표지.jpg"
              alt="차라투스트라는 이렇게 말했다 책 표지"
              style={{
                display: "block",
                width: "100%",
                height: "420px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ fontSize: "1.5rem", color: "#1d1d1f" }}>
            《차라투스트라는 이렇게 말했다》
          </div>
        </div>
      </div>
    </Slide>
  );
};