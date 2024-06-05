import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrl: './create-groups.component.css'
})
export class CreateGroupsComponent {
  
  groupForm: NgForm

  constructor(
    private groupService: GroupService,
    private router: Router
  ){}

  onSubmit(numberOfGroups: number){
    console.log(numberOfGroups)
    this.groupService.createGroups(numberOfGroups).subscribe((result)=> this.goToGroupList())
  }

  goToGroupList(){
    this.router.navigateByUrl('group-list')
  }
}
