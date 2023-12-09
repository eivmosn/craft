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
    box-sizing: border-box;
}

.ghost-indicator::before {
    content: '';
    top: 0px;
    width: 2px;
    left: -4px;
    height: 53px;
    max-height: 53px;
    min-height: 53px;
    position: absolute;
    background-color: red;
    box-sizing: border-box;
}

.ghost-indicator .widget-ghost-item  {
    display: none !important;
}
`
