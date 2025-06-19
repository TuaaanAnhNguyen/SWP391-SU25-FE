import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers.append('Authorization', 'Bearer ' + token);
  }

  return next(req);
};
