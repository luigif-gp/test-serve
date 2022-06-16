
export interface ResponseData {
  commit: Commit;
}

export interface Commit {
  author: Author;
  committer: Author;
  tree: Tree;
  message: string;
}
export interface Author {
  name: string;
  email: string;
  date: string;

}
export interface Tree {
  sha: string;
  url: string;

}