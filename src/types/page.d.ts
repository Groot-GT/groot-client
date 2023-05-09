export type PageId = string;
export type PageURL = string;
export type PageName = string;

export interface Page {
  id: PageId;
  url: PageURL;
  name: PageName;
}

export interface Pages {
  [key: PageId]: Page;
}
