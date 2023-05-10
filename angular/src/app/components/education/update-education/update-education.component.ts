import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education-service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent {
  eduUp: Education = null;

  constructor(private eduService: EducationService, 
    private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit():void{
    const id = this.activatedRoute.snapshot.params['id'];

    this.eduService.getEduById(id).subscribe(data => {
      console.log(data);
      
      this.eduUp = data;
    }, err => {
      alert("error ")
      this.router.navigate(['']);
    })
  }

  updEdu():void{
    const id = this.activatedRoute.snapshot.params['id'];

    this.eduService.updateEdu(id, this.eduUp).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("error ")
      this.router.navigate(['']);
    });
  }
  closeModalEduUpd(){
    this.router.navigate(['']);
  }

}
