import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userID:string|null='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("user id is:" ,this.route.snapshot.paramMap.get('id'));
    this.userID=this.route.snapshot.paramMap.get('id');
    
  }

}
