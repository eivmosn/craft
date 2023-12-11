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

.ghost-indicator {
    position: relative;
    height: 40px;
    max-height: 40px;
    min-height: 40px;
    // grid-column: span 12 / span 12;
}

.ghost-indicator::before {
    content: '';
    top: 0px;
    bottom: 0;
    width: 2px;
    left: -1px;
    height: 100%;
    position: absolute;
    background-color: red;
    box-sizing: border-box;
}

.ghost-indicator .widget-ghost-item  {
    display: none !important;
}
`
