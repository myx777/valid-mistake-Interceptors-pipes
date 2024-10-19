import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable()
export class AppLoggerInterseptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    console.log('New request!');
    return next.handle().pipe(
      map((data) => ({
        status: "success",
        data: data,
      })),
      catchError((err) => {
        console.log(`Error message: ${err}`);
        return throwError(() => ({
            status: 'fail',
            data: err.response || err.message || 'An unknown error occurred',
        }));
      }),
    );
  }
}
