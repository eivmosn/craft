export default [
    {
        group: 'containers',
        component: [
            {
                label: '分组',
                type: 'group',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 19V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"/></g></svg>',
            },
            {
                label: '折叠面板',
                type: 'collapse',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M28 30H4a2.002 2.002 0 0 1-2-2v-8a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2zM4 20h-.002L4 28h24v-8zm24-6H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2zM4 4h-.002L4 12h24V4z"/></svg>'
            },
            {
                label: '分页标签',
                type: 'tab',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M19.4 20H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6ZM11 12V4m-7 8h16"/></svg>'
            },
            {
                label: '行内布局',
                type: 'inline',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2m20 18H2"/><path d="M8 15V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/></g></svg>'
            },
            {
                label: '分步表单',
                type: 'steps',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M9 21H3c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2zm-6-8v6h6v-6H3zm13 17c-.362 0-.72-.014-1.076-.04c-4.352-.332-8.36-2.732-10.723-6.42l1.685-1.08a12.057 12.057 0 0 0 9.19 5.505c.305.023.613.035.924.035v2zm7 0l-2.1-1c-1.7-.8-2.9-2.6-2.9-4.5V18h10v6.5c0 1.9-1.1 3.7-2.9 4.5L23 30zm-3-10v4.5c0 1.2.7 2.2 1.7 2.7l1.3.6l1.3-.6c1-.5 1.7-1.6 1.7-2.7V20h-6zm7.302-8c.454 1.282.698 2.621.698 4h2c0-1.37-.199-2.708-.584-4h-2.114zM27 10h-3c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2v3c0 1.103-.897 2-2 2zm-3-5v3h3V5h-3zm-4-2.417A13.952 13.952 0 0 0 16 2A13.951 13.951 0 0 0 4.202 8.46l1.684 1.08A11.961 11.961 0 0 1 20 4.698V2.583z"/></svg>'
            },
            {
                label: '分割线',
                type: 'divider',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h20M7 4H4v3m7-3h2m4 0h3v3m-9 13h2m-6 0H4v-3m13 3h3v-3"/></svg>'
            }
        ]
    },
    {
        group: 'forms',
        component: [
            {
                label: '输入框',
                type: 'input',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8"/></svg>'
            },
            {
                label: '密码框',
                type: 'password',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7"/><path d="M20.879 16.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z" clip-rule="evenodd"/><path stroke-linecap="round" stroke-linejoin="round" d="m12 11.01l.01-.011m3.99.011l.01-.011M8 11.01l.01-.011"/></g></svg>'
            },
            {
                label: '数字框',
                type: 'inputnumber',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V8l-3 3"/></g></svg>'
            },
            {
                label: '文本内容',
                type: 'text',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7V5H5v2m7-2v14m0 0h-2m2 0h2"/></svg>'
            },
            {
                label: '日期选择',
                type: 'date',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z"/></svg>'
            },
            {
                label: '时间选择',
                type: 'time',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 6v6h6"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></g></svg>'
            },
            {
                label: '下拉选择',
                type: 'select',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M26 6V2H2v10h9v18h19V6ZM4 10V4h20v2H11v4Zm24 18H13V8h15Z"/><path fill="currentColor" d="M15 11h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7zm-4 6h2v2h-2zm4 0h7v2h-7z"/></svg>'
            },
            {
                label: '级联选择',
                type: 'cascader',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z"/></svg>'
            },
            {
                label: '树形选择',
                type: 'treeselect',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M30 12V4h-8v3h-4a2.002 2.002 0 0 0-2 2v6h-6v-3H2v8h8v-3h6v6a2.002 2.002 0 0 0 2 2h4v3h8v-8h-8v3h-4V9h4v3ZM8 18H4v-4h4Zm16 4h4v4h-4Zm0-16h4v4h-4Z"/></svg>'
            },
            {
                label: '颜色选择',
                type: 'color',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><circle cx="10" cy="12" r="2" fill="currentColor"/><circle cx="16" cy="9" r="2" fill="currentColor"/><circle cx="22" cy="12" r="2" fill="currentColor"/><circle cx="23" cy="18" r="2" fill="currentColor"/><circle cx="19" cy="23" r="2" fill="currentColor"/><path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79Z"/></svg>'
            },
            {
                label: '图标选择',
                type: 'icon',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"/><path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2"/><path fill="currentColor" d="M15.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm-7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"/></g></svg>'
            },
            {
                label: '开关',
                type: 'switch',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/><path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z"/></g></svg>'
            },
            {
                label: '评价',
                type: 'rate',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.635 14.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L6 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65l2.324-.355Zm12 0l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L18 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.216-.22-.098-.604.2-.65l2.324-.355Zm-6-9l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L12 9.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65l2.324-.355Z"/></svg>'
            },
            {
                label: '按钮',
                type: 'button',
                icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66667 24.5333V7.46666C2.66667 7.25449 2.75096 7.05101 2.90099 6.90098C3.05102 6.75095 3.2545 6.66666 3.46667 6.66666H28.5333C28.7455 6.66666 28.949 6.75095 29.099 6.90098C29.2491 7.05101 29.3333 7.25449 29.3333 7.46666V24.5333C29.3333 24.7455 29.2491 24.949 29.099 25.099C28.949 25.249 28.7455 25.3333 28.5333 25.3333H3.46667C3.2545 25.3333 3.05102 25.249 2.90099 25.099C2.75096 24.949 2.66667 24.7455 2.66667 24.5333Z" stroke="currentColor" stroke-width="1.5"/><path d="M9.85 17.824C10.134 17.824 10.342 17.744 10.474 17.584C10.606 17.424 10.672 17.234 10.672 17.014V16.594C10.672 16.334 10.588 16.15 10.42 16.042C10.252 15.93 10.062 15.874 9.85 15.874H9.382V17.824H9.85ZM10.588 13.768C10.588 13.528 10.522 13.362 10.39 13.27C10.258 13.174 10.068 13.126 9.82 13.126H9.382V14.86H9.868C10.1 14.86 10.278 14.77 10.402 14.59C10.526 14.406 10.588 14.182 10.588 13.918V13.768ZM10.258 19.054C9.946 19.054 9.542 19.046 9.046 19.03C8.55 19.014 8.194 19.004 7.978 19H7.402V11.968H8.44C8.692 11.968 8.98 11.96 9.304 11.944C9.628 11.924 9.862 11.914 10.006 11.914C10.474 11.914 10.868 11.952 11.188 12.028C11.512 12.104 11.766 12.218 11.95 12.37C12.134 12.522 12.264 12.698 12.34 12.898C12.42 13.098 12.46 13.336 12.46 13.612C12.46 14.036 12.362 14.4 12.166 14.704C11.97 15.008 11.686 15.198 11.314 15.274C12.258 15.358 12.73 15.912 12.73 16.936C12.73 17.244 12.684 17.524 12.592 17.776C12.5 18.024 12.358 18.246 12.166 18.442C11.978 18.634 11.722 18.784 11.398 18.892C11.074 19 10.694 19.054 10.258 19.054ZM14.4067 19V13.558H13.0027V11.968H17.8387V13.558H16.4347V19H14.4067ZM20.2787 19H18.3707V12.532L18.0768 11.968H20.2848L21.3887 14.248L22.4447 16.522L22.1507 13.852V11.968H24.0648V19H22.2348L20.8068 16.222L19.9247 14.482L20.2787 16.786V19Z" fill="currentColor"/></svg>        '
            },
            {
                label: '二维码',
                type: 'qrcode',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12v3M12 3v3m6 6v3m-6 3h9m-3 3h3M6 12h3M6 6.011L6.01 6M12 12.011l.01-.011M3 12.011L3.01 12M12 9.011L12.01 9M12 15.011l.01-.011M15 21.011l.01-.011m-3.01.011l.01-.011M21 12.011l.01-.011M21 15.011l.01-.011M18 6.011L18.01 6M9 3.6v4.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6Zm12 0v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6ZM6 18.011L6.01 18M9 15.6v4.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6Z"/></svg>'
            },
            {
                label: '超链接',
                type: 'link',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 0 0 1.143.124"/><path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997c0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0 0 16.857 7"/></g></svg>'
            },
            {
                label: 'HTML',
                type: 'html',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3H4Z"/><path d="M17 7H7.5l.5 4.5h8l-.5 5.5l-3.5 1l-3.5-1l-.25-2.5"/></g></svg>'
            },
            {
                label: '图片上传',
                type: 'image',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6Z"/><path d="m3 16l7-3l11 5m-5-8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"/></g></svg>'
            },
            {
                label: '文件上传',
                type: 'file',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="m25.7 9.3l-7-7A.908.908 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.908.908 0 0 0-.3-.7ZM18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"/></svg>'
            },
            {
                label: '单选框组',
                type: 'radio',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m7 12.5l3 3l7-7"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></g></svg>'
            },
            {
                label: '多选框组',
                type: 'checkbox',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 26V6h20v20Z"/><path fill="currentColor" d="m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58l-9 8.92z"/></svg>'
            },
            {
                label: '警示信息',
                type: 'alert',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 19v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path d="M6.5 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><path stroke-linecap="round" stroke-linejoin="round" d="M10 12h1M5 7h1"/></g></svg>'
            }
        ]
    },
    {
        group: 'procomponents',
        component: [
            {
                label: '表格',
                type: 'table',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M28 8h-4V4a2.002 2.002 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h4v4a2.002 2.002 0 0 0 2 2h18a2.002 2.002 0 0 0 2-2V10a2.002 2.002 0 0 0-2-2Zm-6 14h-8v-5h8Zm0-7h-8v-5h8Zm-10 0H4v-5h8ZM22 4v4H4V4ZM4 22v-5h8v5Zm24 6H10v-4h12a2.002 2.002 0 0 0 2-2V10h4Z"/></svg>'
            },
            {
                label: '查询筛选',
                type: 'query',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z"/></svg>'
            },
            {
                label: '代码编辑',
                type: 'code',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"/></svg>'
            },
        ]
    },
    {
        group: 'charts',
        component: [
            {
                label: '柱状图',
                type: 'barchart',
                new: true,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M27 28V6h-8v22h-4V14H7v14H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-14 0H9V16h4Zm12 0h-4V8h4Z"/></svg>'
            },
            {
                label: '饼状图',
                type: 'piechart',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4Zm10 11h-9V6.05A10 10 0 0 1 26 15ZM15.42 26A10 10 0 0 1 15 6.05v9a2 2 0 0 0 2 2h9A10 10 0 0 1 15.42 26Z"/></svg>'
            },
            {
                label: '折线图',
                type: 'linechart',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="currentColor" d="m4.67 28l6.39-12l7.3 6.49a2 2 0 0 0 1.7.47a2 2 0 0 0 1.42-1.07L27 10.9l-1.82-.9l-5.49 11l-7.3-6.49a2 2 0 0 0-1.68-.51a2 2 0 0 0-1.42 1L4 25V2H2v26a2 2 0 0 0 2 2h26v-2Z"/></svg>'
            }
        ]
    }
]

export const enUs = {
    input: "Input",
    inputnumber: "InputNumber",
    cascader: 'Cascader',
    date: "DatePicker",
    time: "TimePicker",
    radio: "Radios",
    checkbox: "Checkboxs",
    select: "Select",
    file: "FileUpload",
    image: "ImageUpload",
    qrcode: "QRCode",
    table: "Table",
    group: "Group",
    tab: "Tabs",
    button: "Button",
    rate: "Rate",
    switch: "Switch",
    color: "ColorPicker",
    alert: "Alert",
    text: "Text",
    collapse: "Collapse",
    query: 'Query',
    password: 'Password',
    treeselect: 'TreeSelect',
    icon: 'IconPicker',
    code: 'CodeEditor',
    html: 'HTML',
    link: 'Link',
    inline: 'InlineBlock',
    steps: 'Steps',
    divider: 'Divider',
    barchart: 'BarChart',
    linechart: 'LineChart',
    piechart: 'PieChart',
    containers: 'Containers',
    forms: 'Forms',
    procomponents: 'ProComponents',
    charts: 'Charts',
    preferences: 'System Preferences',
    language: 'Language',
    hotkey: 'Hotkey',
    theme: 'Theme',
    contact: 'Contact',
    reset: 'Reset',
    component: 'Component',
    search: 'Search',
    themecolor: 'Theme Color',
    colors: 'Color',
    dark: 'Dark',
    light: 'Light',
    auto: 'Automatic',
}

import settings from './setting'

export {
    settings
}