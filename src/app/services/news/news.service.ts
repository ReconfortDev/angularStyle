import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-08-11&sortBy=publishedAt&apiKey=8a72db4840b5434aa5ce894166b5d80b';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    this.loadingSubject.next(true);
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => {
        console.log('Data fetched successfully', data);
      }),
      catchError(this.handleError),
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
