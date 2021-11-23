import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCard } from './model/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiBase = 'https://simply-how.herokuapp.com';
  articleCardsPath = '/article-cards';
  articlesPath = '/articles';

  constructor(private http: HttpClient) { }

  getArticle(id: string) {
    return this.http.get<Article>(`${this.apiBase}${this.articlesPath}/${id}`);
  }

  getArticleCards() {
    return this.http.get<ArticleCard[]>(
      `${this.apiBase}${this.articleCardsPath}`
    );
  }
}