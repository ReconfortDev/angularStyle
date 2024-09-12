import { Component, OnInit } from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ArticlesResponse} from "../../../model/news";
import {NewsService} from "../../../services/news/news.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shophome',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgIf,
    NgForOf,
    RouterLink,
    DatePipe
  ],
  templateUrl: './shophome.component.html',
  styleUrl: './shophome.component.scss'
})
export class ShophomeComponent implements OnInit{
  data!: ArticlesResponse | null;
  error: string | null = null;
  loading$!: Observable<boolean>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadData();
    this.loading$ = this.newsService.loading$;
  }

  private loadData(): void {
    this.newsService.loading$.subscribe(loading => {
      if (loading) {
        console.log('Loading...');
      }
    });

    this.newsService.fetchData()
      .subscribe({
        next: (data) => {
          this.data = data;
          this.error = null;
        },
        error: (error) => {
          this.error = error;
          this.data = null;
        }
      });
  }

}

