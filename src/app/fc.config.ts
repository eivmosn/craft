export const materials = [
  {
    label: 'containers',
    group: 'containers',
    children: [
      {
        type: 'group',
        label: 'group',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m6 8.01l.01-.011M8 8.01l.01-.011M10 8.01l.01-.011"/></g></svg>',
        props: {},
      },
      {
        type: 'collapse',
        label: 'collapse',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M30 15h-2V7H13V5h15a2.002 2.002 0 0 1 2 2Z"/><path fill="currentColor" d="M25 20h-2v-8H8v-2h15a2.002 2.002 0 0 1 2 2Z"/><path fill="currentColor" d="M18 27H4a2.002 2.002 0 0 1-2-2v-8a2.002 2.002 0 0 1 2-2h14a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2ZM4 17v8h14.001L18 17Z"/></svg>',
        props: {},
      },
      {
        type: 'grid',
        label: 'grid',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"/></svg>',
        props: {},
      },
      {
        type: 'inline',
        label: 'inline',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M22 3H2m20 18H2"/><path d="M8 15V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/></g></svg>',
        props: {},
      },
    ],
  },
  {
    label: 'components',
    group: 'components',
    children: [
      {
        type: 'input',
        label: 'input',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8"/></svg>',
        props: {},
      },
      {
        type: 'numeric',
        label: 'numeric',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 16c-1.38 0-2.5-.5-2.5-2s1.12-2 2.5-2s2.5.5 2.5 2s-1.12 2-2.5 2Zm0-8c-1.38 0-2.5.5-2.5 2s1.12 2 2.5 2s2.5-.5 2.5-2s-1.12-2-2.5-2Z"/></g></svg>',
        props: {},
      },
      {
        type: 'textarea',
        label: 'textarea',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7V5H5v2m7-2v14m0 0h-2m2 0h2"/></svg>',
        props: {},
      },
      {
        type: 'password',
        label: 'password',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"/></svg>',
        props: {},
      },
      {
        type: 'date',
        label: 'date',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H3Zm0 0V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5"/></svg>',
        props: {},
      },
      {
        type: 'datetime',
        label: 'datetime',
        props: {},
      },
      {
        type: 'time',
        label: 'time',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 6v6h6"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></g></svg>',
        props: {},
      },
      {
        type: 'checkbox',
        label: 'checkbox',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m7 12.5l3 3l7-7"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></g></svg>',
        props: {},
      },
      {
        type: 'radio',
        label: 'radio',
        props: {},
      },
      {
        type: 'select',
        label: 'select',
        props: {},
      },
      {
        type: 'treeselect',
        label: 'treeselect',
        props: {},
      },
      {
        type: 'switch',
        label: 'switch',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/><path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z"/></g></svg>',
        props: {},
      },
      {
        type: 'rate',
        label: 'rate',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54l5.808-.845Z"/></svg>',
        props: {},
      },
      {
        type: 'icon',
        label: 'icon',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"/><path d="M14 9h2m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"/><path d="M7.5 14.5s1.5 2 4.5 2s4.5-2 4.5-2"/></g></svg>',
        props: {},
      },
      {
        type: 'color',
        label: 'color',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m2.636 10.293l7.071-7.071l8.485 8.485l-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828Zm5.657-8.485l1.414 1.414"/><path stroke-miterlimit="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3c-1.656 0-2.988-1.345-3-3C17.01 17.992 20 15 20 15Z" clip-rule="evenodd"/></g></svg>',
        props: {},
      },
      {
        type: 'html',
        label: 'html',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3H4Z"/><path d="M17 7H7.5l.5 4.5h8l-.5 5.5l-3.5 1l-3.5-1l-.25-2.5"/></g></svg>',
        props: {},
      },
      {
        type: 'alert',
        label: 'alert',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M14 14V6m0 8l6.102 3.487a.6.6 0 0 0 .898-.52V3.033a.6.6 0 0 0-.898-.521L14 6m0 8H7a4 4 0 1 1 0-8h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 0 1-3.92.56Z"/></svg>',
        props: {},
      },
      {
        type: 'qrcode',
        label: 'qrcode',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12v3M12 3v3m6 6v3m-6 3h9m-3 3h3M6 12h3M6 6.011L6.01 6M12 12.011l.01-.011M3 12.011L3.01 12M12 9.011L12.01 9M12 15.011l.01-.011M15 21.011l.01-.011m-3.01.011l.01-.011M21 12.011l.01-.011M21 15.011l.01-.011M18 6.011L18.01 6M9 3.6v4.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6Zm12 0v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6ZM6 18.011L6.01 18M9 15.6v4.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6Z"/></svg>',
        props: {},
      },
      {
        type: 'upload',
        label: 'upload',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-9m0 0l3.5 3.5M12 13l-3.5 3.5M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"/></svg>',
        props: {},
      },
      {
        type: 'divider',
        label: 'divider',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h20M7 4H4v3m7-3h2m4 0h3v3m-9 13h2m-6 0H4v-3m13 3h3v-3"/></svg>',
        props: {},
      },
    ],
  },
]
