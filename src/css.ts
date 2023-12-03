export default `
:root {
    --fc-monitor: #edeff3;
}

html.dark {
    --fc-monitor: rgb(16, 16, 20);
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#app,
.n-config-provider,
.n-element {
    height: 100%;
    overflow: hidden;
}

.fc-container {
    background: var(--body-color);
}
`
