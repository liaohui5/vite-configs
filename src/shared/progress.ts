import NProgress from 'nprogress';

// import css move to main.ts
// https://github.com/rstacruz/nprogress
// import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

export const start = NProgress.start;
export const done = NProgress.done;
