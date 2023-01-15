import { createStitches,defaultThemeMap } from '@stitches/react';
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from '@ignite-ui/tokens'


export const {
    styled,
    css,
    keyframes,
    createTheme,
    getCssText,
    globalCss,
    theme
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        width: 'space',
        height: 'space',
        minHeight: 'space',
         
    },
    theme: {
        colors:colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space
    },
})