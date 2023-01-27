import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup = new FormGroup({
    nomeAutore: new FormControl('', Validators.required),
    contenuto: new FormControl('', Validators.required)
  });

  constructor( 
    private postsService: PostService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) {
      alert('Completa tutti i campi')
    }
    this.postsService.addPost(this.form.value)
    this.form.reset()
    this.router.navigateByUrl('/')
  }
}
