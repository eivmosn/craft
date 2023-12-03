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

.fc-collapse .n-collapse-item__content-inner {
    padding-top: 0 !important;
}

.fc-collapse .n-collapse-item__header-main {
    padding: 5px 8px;
}

.fc-collapse .n-collapse-item__header-main {
    border-bottom: 1px solid var(--border-color);
}

.fc-collapse .n-collapse-item__header-main {
    justify-content: space-between;
}

.fc-collapse.n-collapse-item--active .n-collapse-item__content-inner {
    border-bottom: 1px solid var(--border-color);
}
`
