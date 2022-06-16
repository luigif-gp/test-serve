import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { ResponseData } from './app.interfaces';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private data = {};
  private url = 'https://api.github.com';
  constructor(private httpService: HttpService) { }

  // handle API request
  private http(url: string): Observable<AxiosResponse<ResponseData[]>> {
    const config = {
      headers: {
        Authorization: `${process.env.BASIC_TOKEN}`,
      },
    };
    return this.httpService.get(url, config)
      .pipe(
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }

  getUserRepos(params): any {
    const { user } = params;
    return this.http(`${this.url}/users/${user}/repos`).pipe(
      map((response) => response.data),
      map((data) => ({
        ...this.data[params.user],
        data,
      }))
    );
  }

  getRepo(params: { user: string; repo: string }): any {
    const { user, repo } = params;
    return this.http(`${this.url}/repos/${user}/${repo}`).pipe(
      map((response) => response.data),
      map((
        data) => ({
          ...this.data[params.user],
          data,
        }))
    );
  }

  getRepoData(params: { user: string; repo: string; search: string }) {
    const { user, repo, search } = params;
    return this.http(`${this.url}/repos/${user}/${repo}/${search}`).pipe(
      map((response) => response.data),
      map((data) => (
        data.map(d => ({
          car: d.commit.committer,
          message: d.commit.message,
          tree: d.commit.tree,
        }))))
    );

  }

  getUser(params: { user: string }): any {
    const { user } = params;
    return this.http(`${this.url}/users/${user}`).pipe(
      map((response) => response.data),
      map((data) => ({
        ...this.data[params.user],
        data,
      }))
    );
  }
}
