const root = `
:root{
    --base-border: 4px;
    --base-padding: 6px;
    --base-border-color: rgb(208, 215, 222);
}

html.dark {
    --base-border-color: #333;
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
#app {
    height: 100%;
    overflow: hidden;
}

.indicator {
    position: relative;
}

.indicator::before {
    content: " ";
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    display: block;
    background: red;
    clear:both;
    position: absolute;
}

.fc-collapse .n-collapse-item__content-inner {
    padding-top: 0 !important;
    border-bottom: 1px solid var(--base-border-color);
}

.fc-collapse .n-collapse-item__header-main {
    padding: 5px 8px;
    background-color: rgb(246, 248, 250);
}

.fc-collapse .n-collapse-item__header-main {
    border-bottom: 1px solid var(--base-border-color);
}
`
export default `${root}`
