import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color:  ${({ theme }) => theme.palette.primary.main};
  border-radius: 9999px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color:rgba( 14, 77, 164, 0.7);
}
/* Normalize TW */
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

body {
  margin: 0;
  line-height: inherit;
  background-repeat: no-repeat;

  #__next {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-size: 100%;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

:disabled {
  cursor: not-allowed;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}
`
