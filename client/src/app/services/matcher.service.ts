import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatcherService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getAllMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)

  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    throw error; // You can also return an observable with a user-facing error message.
  }
}
