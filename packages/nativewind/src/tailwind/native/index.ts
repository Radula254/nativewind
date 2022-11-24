import { Config } from "tailwindcss";

import { boxShadow } from "./plugins/box-shadow";
import { darkMode } from "./plugins/dark-mode";
import { divide } from "./plugins/divide";
import { elevation } from "./plugins/elevation";
import { fontSize } from "./plugins/font-size";
import { gap } from "./plugins/gap";
import { parent } from "./plugins/parent";
import { platforms } from "./plugins/platforms";
import { rotate } from "./plugins/rotate";
import { scale } from "./plugins/scale";
import { skew } from "./plugins/skew";
import { space } from "./plugins/space";
import { translate } from "./plugins/translate";
import { variables } from "./plugins/variables";

const plugins = [
  boxShadow,
  darkMode,
  divide,
  elevation,
  fontSize,
  parent,
  platforms,
  rotate,
  scale,
  skew,
  space,
  translate,
  variables,
];

const corePlugins: Config["corePlugins"] & Record<string, unknown> = {
  backgroundOpacity: false,
  borderOpacity: false,
  boxShadow: false,
  boxShadowColor: false,
  divideColor: false,
  divideOpacity: false,
  divideStyle: false,
  divideWidth: false,
  fontSize: false,
  placeholderOpacity: false,
  ringOpacity: false,
  rotate: false,
  scale: false,
  skew: false,
  space: false,
  textOpacity: false,
  translate: false,
};

const preset: Config = {
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        auto: "0",
        square: "1",
        video: "1.777777778",
      },
      letterSpacing: {
        tighter: "-0.5px",
        tight: "-0.25px",
        normal: "0px",
        wide: "0.25px",
        wider: "0.5px",
        widest: "1px",
      },
      elevation: {
        sm: "1.5",
        DEFAULT: "3",
        md: "6",
        lg: "7.5",
        xl: "12.5",
        "2xl": "25",
        none: "0",
      },
      boxShadow: {
        sm: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        md: "0px 6px 10px rgba(0, 0, 0, 0.1)",
        lg: "0px 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0px 20px 25px rgba(0, 0, 0, 0.1)",
        "2xl": "0px 25px 50px rgba(0, 0, 0, 0.1)",
        none: "0px 0px 0px rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins,
  corePlugins,
};

function nativewindPreset({ gapPolyfill = true } = {}) {
  // Duplicating the preset allows tests to run with different config
  const duplicatePreset = {
    ...preset,
    plugins: [...plugins],
    corePlugins: { ...corePlugins },
  };

  if (gapPolyfill) {
    duplicatePreset.plugins.push(gap);
    duplicatePreset.corePlugins.gap = false;
  }

  return duplicatePreset;
}

// All the preset so be used as an object or a function
// export default Object.assign(nativewindPreset, preset);
export default Object.assign(nativewindPreset, preset);
