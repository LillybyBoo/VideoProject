import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface pushComment {
  text: string;

}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly commentNewtList: BehaviorSubject<pushComment[]> = new BehaviorSubject([] as pushComment[]);

  private comments: pushComment[] = [];

  commentList: Observable<pushComment[]> = this.commentNewtList.asObservable();

  constructor() {
  }

  addComment(com: pushComment) {
    this.comments.push(com);
    this.commentNewtList.next(this.comments);
  }

  getComment() {
    return this.commentList
  }

}
