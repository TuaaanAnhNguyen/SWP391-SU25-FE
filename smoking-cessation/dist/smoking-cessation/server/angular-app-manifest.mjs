
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/homepage",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/homepage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 660, hash: '59f3fe2f906a42b96c4b459916a7a474112005e3a529162704bfada22e938ed1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '59131dbcd11bc22eeb838c7fd5377d2226573b12eaf97112237bc25340f55292', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 7512, hash: 'e525f5aef8757628f12137cbfa5f841c7f556ea9b47f4186824be5c2761a3e8a', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5271, hash: '5a8ccc44b1a6280f6c6cc28ff4de6212a7086428e39c4d3d6c6afe97a3afeb24', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'homepage/index.html': {size: 14261, hash: 'ffddcfd71873df6227dee44eb08bd813602dd6c9d3f5e5b5ea650fe9cb973b54', text: () => import('./assets-chunks/homepage_index_html.mjs').then(m => m.default)},
    'styles-NZS6Z22P.css': {size: 35, hash: 'Sk7fL0qjg/Q', text: () => import('./assets-chunks/styles-NZS6Z22P_css.mjs').then(m => m.default)}
  },
};
