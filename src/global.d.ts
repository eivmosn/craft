declare global {
  interface Window {
    $message: import('naive-ui').MessageApi
    $loading: import('naive-ui').LoadingBarApi
    $dialog: import('naive-ui').DialogApi
    $notification: import('naive-ui').NotificationApi
  }
}

export {}
