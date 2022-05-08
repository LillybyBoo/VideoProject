import {Component, OnInit} from '@angular/core';
import {CardModel} from "../card/card-model";
import {CommentsService} from "./comments.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })

  commentList: CardModel[] = [];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getComment().subscribe((data: any) => this.commentList = data["comments"])
  }

  public pushButton(): void {
    if (this.form.invalid) {
      alert("Form is not valid")
      return
    }
  }
}
