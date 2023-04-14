import { Global } from "@emotion/react"

export const fonts = {
  heading:
    "'HafferXH', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Haffer', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  statusTags: "'Source Code Pro', 'monospace'",
}

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Haffer';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/Haffer-Regular.woff) format('woff'),
             url(/assets/fonts/Haffer-Regular.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Haffer';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/Haffer-Bold.woff) format('woff'),
             url(/assets/fonts/Haffer-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-SemiBold.woff) format('woff'),
             url(/assets/fonts/HafferXH-SemiBold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-SemiBold.woff) format('woff'),
             url(/assets/fonts/HafferXH-SemiBold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-Bold.woff) format('woff'),
             url(/assets/fonts/HafferXH-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-Heavy.woff) format('woff'),
             url(/assets/fonts/HafferXH-Heavy.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/SourceCodePro-Regular.woff) format('woff'),
              url(/assets/fonts/SourceCodePro-Regular.woff2) format('woff2');
      }
    `}
  />
)
