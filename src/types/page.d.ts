export type PageId = string;
export type PageURL = string;
export type PageName = string;

export interface Page {
  url: PageURL;
  name: PageName;
}

export interface Pages {
  [key: PageId]: Page;
}
