import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light-theme';

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.body.className = '';
    document.body.classList.add(this.currentTheme);
  }

  toggleTheme() {
    if (this.currentTheme === 'light-theme') {
      this.setTheme('dark-theme');
    } else {
      this.setTheme('light-theme');
    }
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
