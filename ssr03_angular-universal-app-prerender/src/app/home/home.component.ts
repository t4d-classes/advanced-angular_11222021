import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleCard } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articleCards!: ArticleCard[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getArticleCards().subscribe((cards) => {
      this.articleCards = cards;
    });
  }
}