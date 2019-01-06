import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PostModel} from '../model/post.model';
import {Observable} from 'rxjs';
import {BookingModel} from '../model/booking';
import {DateModel} from '../model/date.model';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class HttpJsonService {

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts');
  }


  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUserId(id: number): Observable<Array<PostModel>> {
    const params = new HttpParams().set('userId', String(id));
    return this.http.get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts', {params: params});
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: PostModel, id: number): Observable<PostModel> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, post);
  }


  myUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(MyEnumService._TOMCAT+ '/users');
  }


  getBookings(model: DateModel): Observable<Array<BookingModel>> {
    let myParams: HttpParams;
    if (model.dateTo !== undefined && model.dateFrom !== undefined) {
      // myParams = new HttpParams().set('dateFrom', model.dateFrom.toISOString()).set('dateTo', model.dateTo.toISOString());
      //myParams = new HttpParams().set('dateFrom', moment(model.dateFrom).utc().local().format()).set('dateTo', model.dateTo.toISOString());

      //console.log(new Date().toISOString());
      //console.log(moment(new Date().toISOString()).local().format('YYYY-MM-DD[T]HH:mm:ss[Z]'));
      myParams = new HttpParams().set('dateTo', moment(model.dateTo.toISOString()).local().format('YYYY-MM-DD[T]HH:mm[Z]'));
    }
    return this.http.get<Array<BookingModel>>(MyEnumService._TOMCAT + '/bookings/list_time_frame', {params: myParams});
    // return null;
  }
}

enum MyEnumService {
  _INTELIJ = 'http://localhost:8080/REST',
  _TOMCAT = 'http://localhost:8080/RBS/REST'
}


