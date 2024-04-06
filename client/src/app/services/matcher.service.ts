import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatcherService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    const query = `
      query {
        getUsersList(id: "4") {
          id
          username
          location {
            coordinates
          }
          gameInterest {
            game
            skillScore
            interestLevel
          }
        }
      }
    `;

    const requestBody = {
      query: query,
      variables: {}
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://localhost:3000', requestBody, { headers: headers });
  }

  getUserById(userId: string): Observable<any> {
    const query = `
      query($userId: String!) {
        getUser(id: $userId) {
          id
          username
          location {
            coordinates
          }
          gameInterest {
            game
            skillScore
            interestLevel
          }
        }
      }
    `;

    const requestBody = {
      query: query,
      variables: {
        userId: userId
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://localhost:3000', requestBody, { headers: headers });
  }
}
