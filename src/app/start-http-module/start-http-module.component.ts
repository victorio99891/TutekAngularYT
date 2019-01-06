import {Component, OnInit} from '@angular/core';
import {PostModel} from './model/post.model';
import {HttpJsonService} from './service/http-json.service';
import {DateModel} from './model/date.model';

@Component({
  selector: 'app-start-http-module',
  templateUrl: './start-http-module.component.html',
  styleUrls: ['./start-http-module.component.css']
})
export class StartHttpModuleComponent implements OnInit {

  value: Date = new Date();

  postList: Array<PostModel> = [];
  post: PostModel = null;

  idValue: number = 1;
  time: any;
  date: any;

  constructor(private http: HttpJsonService) {
  }

  ngOnInit() {
  }

  getPosts() {
    this.http.getPosts().subscribe(post => this.postList = post);
    console.log(this.time + ' ' + this.date);
  }

  getPost(index: number) {
    this.http.getPost(index).subscribe(p => {
      this.post = p;
      this.postList = [];
      this.postList.push(this.post);
    });
  }

  getPostByUser(index: number) {
    this.http.getPostByUserId(index).subscribe(post => this.postList = post);
  }

  addPost() {
    const post: PostModel =
      {
        userId: 1001,
        id: null,
        title: 'Mój post',
        body: 'Pierwszy post w angularze!'
      };
    this.http.addPost(post).subscribe(post => {
      this.post = post;
      this.postList = [];
      this.postList.push(this.post);
    });
  }

  updatePost(index: number) {
    const post: PostModel = {
      id: 1,
      title: 'zmieniam tylko wpis',
      body: 'Pierwszy post w angularze!'
    };
    this.http.updatePost(post, index).subscribe(post => {
      this.post = post;
      this.postList = [];
      this.postList.push(this.post);
    });
  }

  deletePost() {

  }

  changePost() {
    const post: PostModel = {
      id: 1,
      body: 'Zmieniam tylko post!'
    };
  }


  myAPICall() {
    this.http.myUsers().subscribe(user => {
      console.log(user);
    });
  }

  logit(event: Date) {
    console.log(event.toISOString());
  }


  bookingsGet(date: Date) {
    const model: DateModel = {
      dateFrom: new Date('2017-12-12T12:00:00Z'),
      dateTo: date
    };
    this.http.getBookings(model).subscribe(items => console.log(items));
  }
}


