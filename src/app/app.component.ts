import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, skills, experiences, educations } from './portfolio.data';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.use('en');
  }

  protected readonly projects = projects;
  protected readonly skills = skills;
  protected readonly experiences = experiences;
  protected readonly educations = educations;
  protected readonly currentYear = new Date().getFullYear();
  protected menuOpen = false;
  protected activeSection = 'home';

  protected readonly email = 'mohanofficialmail.e@gmail.com';
  protected readonly githubUrl = 'https://github.com/Mohan5389';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/mohan-raj-6980a6284';
  
  protected formSubmitted = false;
  protected isSubmitting = false;
  protected submitError = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const position = window.scrollY + 140;

    for (const id of sections) {
      const element = document.getElementById(id);
      if (element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight) {
        this.activeSection = id;
        break;
      }
    }
  }

  protected scrollTo(id: string): void {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.formSubmitted = false;

      try {
        const response = await fetch('https://formspree.io/f/myezplrq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(form.value)
        });

        if (response.ok) {
          this.formSubmitted = true;
          form.reset();
          setTimeout(() => {
            this.formSubmitted = false;
          }, 5000);
        } else {
          this.submitError = true;
        }
      } catch (error) {
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}