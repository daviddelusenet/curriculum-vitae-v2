// This mixin is based on https://eager.io/blog/smarter-link-underlines/
import { css } from "styled-components";

export const textShadowToCropUnderline = (backgroundColor: string) => css`
  text-shadow:
    0 0.03em ${backgroundColor},
    0 -0.03em ${backgroundColor},
    0.03em 0 ${backgroundColor},
    -0.03em 0 ${backgroundColor},
    0.06em 0 ${backgroundColor},
    -0.06em 0 ${backgroundColor},
    0.09em 0 ${backgroundColor},
    -0.09em 0 ${backgroundColor},
    0.12em 0 ${backgroundColor},
    -0.12em 0 ${backgroundColor},
    0.15em 0 ${backgroundColor},
    -0.15em 0 ${backgroundColor},
    0.18em 0 ${backgroundColor},
    -0.18em 0 ${backgroundColor};
`;

export const animateUnderline = () => css`
  background-size:
    0.05em 1px,
    0.05em 1px,
    100% 1px;
`;

export const underline = ({
  animate = false,
  backgroundColor,
  color,
  underlinePosition = "88%",
}: {
  animate?: boolean;
  backgroundColor: string;
  color: string;
  underlinePosition?: string;
}) => css`
  ${textShadowToCropUnderline(backgroundColor)}
  background-image: linear-gradient(${backgroundColor}, ${backgroundColor}),
        linear-gradient(${backgroundColor}, ${backgroundColor}),
        linear-gradient(${color}, ${color});
  background-position:
    0 90%,
    100% 90%,
    0 ${underlinePosition};
  background-repeat: no-repeat, no-repeat, no-repeat;

  ${animate
    ? css`
        transition: background-size 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        background-size:
          0.05em 1px,
          0.05em 1px,
          0 1px;
      `
    : css`
        background-size:
          0.05em 1px,
          0.05em 1px,
          100% 1px;
      `}
`;
