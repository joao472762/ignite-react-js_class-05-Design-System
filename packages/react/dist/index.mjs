var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
var {
  styled,
  css,
  keyframes,
  createTheme,
  getCssText,
  globalCss,
  theme
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space",
    minHeight: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  borderRadius: "$sm",
  border: "1px solid $gray600",
  width: "100%",
  padding: "$6",
  backgroundColor: "$gray800"
});
Box.displayName = "Box";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  columnGap: "$2",
  textAlign: "center",
  padding: "0 $4",
  borderRadius: "$sm",
  width: "100%",
  minWidth: 120,
  cursor: "pointer",
  fontSize: "$sm",
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$short",
  "svg": {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$ignite500",
        color: "$white",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secundary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          backgroundColor: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          backgroundColor: "$white"
        },
        "&:disabled": {
          backgroundColor: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
import { Root, Fallback, Image } from "@radix-ui/react-avatar";
var AvatarContainer = styled(Root, {
  display: "block",
  width: "$12",
  height: "$12",
  borderRadius: "$full",
  overflow: "hidden"
});
var AvatarImage = styled(Image, {
  objectFit: "cover",
  width: "100%",
  height: "100%"
});
var AvatarFallback = styled(Fallback, {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray200",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar(_a) {
  var _b = _a, { fallback } = _b, rest = __objRest(_b, ["fallback"]);
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, rest)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar.displayName = "Avatar";

// src/components/TextArea.ts
var TextArea = styled("textarea", {
  width: "100%",
  background: "$gray900",
  boxSizing: "border-box",
  minHeight: "$20",
  padding: "$3 $4",
  resize: "vertical",
  borderRadius: "$sm",
  border: "0px 0px 0px 2px $gray900",
  lineHeight: "$base",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  "&:focus": {
    borderColor: "$ignite500"
  },
  "&:hover": {
    color: "$gray400"
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.7
  }
});
TextArea.displayName = "TextArea";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "baseline",
  padding: "$3 $4",
  borderRadius: "$sm",
  height: 46,
  width: "100%",
  background: "$gray900",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  "&:has(input:focus)": {
    borderColor: "$ignite500"
  },
  "&:has(input:disabled)": {
    opacity: 0.7,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  lineHeight: "$base",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400"
});
var Input = styled("input", {
  all: "unset",
  lineHeight: "$base",
  background: "transparent",
  width: "100%",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  "&:hover": {
    color: "$gray400"
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, rest = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ jsxs2(Prefix, { children: [
      " ",
      prefix
    ] }),
    /* @__PURE__ */ jsx2(Input, __spreadValues({}, rest))
  ] });
}
TextInput.displayName = "TextInput";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  lineHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: "$gray900",
  width: "$6",
  height: "$6",
  borderRadius: "$xs",
  overflow: "hidden",
  cursor: "pointer",
  border: "2px solid  $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite500"
  },
  "&:focus": {
    border: "2px solid  $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  height: "$4",
  color: "$white",
  width: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2() {
  return /* @__PURE__ */ jsx3(CheckboxContainer, { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) });
}
Checkbox2.displayName = "Checkbox";

// src/components/Toast/index.tsx
import { X } from "phosphor-react";
import { useState } from "react";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var ToastProvider = styled(Toast.Provider, {});
var ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: "$6",
  right: "$6",
  overflow: "hidden",
  listStyle: "none"
});
var slideIn2 = keyframes({
  "0%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0%)" }
});
var slideOut2 = keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(100%)" }
});
var ToastRoot = styled(Toast.Root, {
  width: 360,
  backgroundColor: "$gray600",
  padding: "$3 $5",
  borderRadius: "$sm",
  display: "flex",
  justifyContent: "space-between",
  outline: "none",
  "&[data-state=open]": {
    animation: `${slideIn2} 200ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  "&[data-state=closed]": {
    animation: `${slideOut2} 200ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});
var ToastContent = styled("div", {});
var ToastTitle = styled(Toast.Title, {
  fontFamily: "$default",
  fontWeight: "bold",
  color: "$white",
  fontSize: "large"
});
var ToastDescription = styled(Toast.Description, {
  fontFamily: "$default",
  marginTop: "$1",
  fontSize: "$sm",
  color: "$gray200"
});
var ToastClose = styled(Toast.Close, {
  color: "$gray200"
});

// src/components/CalendarButton.ts
var CalendarButton = styled("button", {
  alignItems: "center",
  justifyContent: "center",
  width: 66,
  height: 58,
  fontFamily: "$default",
  color: "$white",
  border: "none",
  borderRadius: "$sm",
  variants: {
    isAvaliable: {
      true: {
        backgroundColor: "$gray600"
      },
      false: {
        backgroundColor: "$gray800"
      }
    }
  },
  defaultVariants: {
    isAvaliable: false
  }
});

// src/components/Toast/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Toast2({ title, description, day }) {
  const [toastIsVisible, setToastIsVisible] = useState(false);
  function handleChangeToastVisibility(isVisible) {
    setToastIsVisible(isVisible);
  }
  return /* @__PURE__ */ jsxs3(ToastProvider, { swipeDirection: "right", duration: 4e3, children: [
    /* @__PURE__ */ jsx4(CalendarButton, { onClick: () => handleChangeToastVisibility(true), children: day }),
    /* @__PURE__ */ jsxs3(ToastRoot, { open: toastIsVisible, onOpenChange: handleChangeToastVisibility, children: [
      /* @__PURE__ */ jsxs3(ToastContent, { children: [
        /* @__PURE__ */ jsx4(ToastTitle, { children: title }),
        /* @__PURE__ */ jsx4(ToastDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsx4(ToastClose, { onClick: () => handleChangeToastVisibility(false), asChild: true, children: /* @__PURE__ */ jsx4(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsx4(ToastViewport, {})
  ] });
}

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size),1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  width: "100%",
  variants: {
    active: {
      true: {
        background: "#fff"
      },
      false: {
        background: "$gray600"
      }
    }
  },
  defaultVariants: {
    active: false
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs4(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs4(Label, { children: [
      "passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx5(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, index) => index + 1).map((step) => /* @__PURE__ */ jsx5(Step, { active: step <= currentStep }, step)) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/DayCalendar/index.tsx
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { TooltipProvider, TooltipTrigger as TooltipTrigger2 } from "@radix-ui/react-tooltip";

// src/components/DayCalendar/styles.ts
import * as Tooltip from "@radix-ui/react-tooltip";
var TooltipTrigger = styled(Tooltip.Trigger);
var ToolTipProvider = styled(Tooltip.Provider);
var ToolTipRoot = styled(Tooltip.Root);
var ToolTipPortal = styled(Tooltip.Portal);
var ToolTipContent = styled(Tooltip.Content, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray900",
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray100",
  borderRadius: 5,
  minWidth: 219,
  height: "$12"
});
var TooltipArrow = styled(Tooltip.Arrow, {
  height: 10,
  width: 10,
  fill: "$gray900"
});

// src/components/DayCalendar/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function DayCalendar({ date, isAvaliable }) {
  const dateFormated = format(date, "d 'de' MMMM ", {
    locale: ptBR
  });
  return /* @__PURE__ */ jsx6(TooltipProvider, { children: /* @__PURE__ */ jsxs5(ToolTipRoot, { delayDuration: 200, children: [
    /* @__PURE__ */ jsx6(TooltipTrigger2, { asChild: true, children: /* @__PURE__ */ jsx6(CalendarButton, { isAvaliable, children: date.getDate() }) }),
    /* @__PURE__ */ jsx6(ToolTipPortal, { children: /* @__PURE__ */ jsxs5(ToolTipContent, { children: [
      /* @__PURE__ */ jsxs5("span", { children: [
        dateFormated,
        " -",
        isAvaliable ? " dispon\xEDvel" : "indispon\xEDvel"
      ] }),
      /* @__PURE__ */ jsx6(TooltipArrow, {})
    ] }) })
  ] }) });
}
export {
  Avatar,
  Box,
  Button,
  CalendarButton,
  Checkbox2 as Checkbox,
  DayCalendar,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast2 as Toast
};
