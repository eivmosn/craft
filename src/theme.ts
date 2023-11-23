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
    top: -4px;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    display: block;
    background: red;
    clear:both;
    position: absolute;
}

`
export default `${root}`
