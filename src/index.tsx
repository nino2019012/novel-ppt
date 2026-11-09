import React from "react";
import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
} from "spectacle";

import { Slide01 } from "./slide/Slide01";
import { Slide02 } from "./slide/Slide02";
import { Slide03_schopenhaur } from "./slide/Slide03_schopenhaur";
import { Slide_nietche } from "./slide/Slide_nietche";
import { Slide_작품구성 } from "./slide/Slide_작품구성";
import { Slide_중력 } from "./slide/Slide_중력";
import { Slide_sun } from "./slide/Slide_sun";
import { Slide_garden } from "./slide/Slide_garden";

const theme = {
  colors: {
    primary: "#1d1d1f",
    secondary: "#86868b",
    tertiary: "#f5f5f7",
    quaternary: "#ffffff",
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const Presentation = () => (
  <Deck
    template={() => <DefaultTemplate color={theme.colors.primary} />}
    theme={theme}
  >
    <Slide01 />
    <Slide02 />
    <Slide_작품구성 />
    <Slide03_schopenhaur />
    <Slide_중력 />
    <Slide_nietche />
    <Slide_sun />
    <Slide_garden />
  </Deck>
);

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error('HTML에 id가 "app"인 요소가 없습니다.');
}

createRoot(rootElement).render(<Presentation />);