import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupService } from '../../services/group.service';
import { RouterOutlet } from '@angular/router';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css',
})
export class GroupListComponent implements OnInit, OnDestroy{

  groups: any
  subscription: Subscription

  constructor(
    private groupService: GroupService
  ){
    this.subscription = new Subscription
  }

  ngOnInit(): void {
      this.subscription = this.groupService.getGroups().subscribe(groups => this.groups = groups);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
