import { State } from '@ngxs/store';

export const POSTS_STATE_NAME = 'posts';

export interface PostModel {
  id: string;
  title: string;
  renderedText: string;
  rawText: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: any; // TODO: update with user model
  updatedBy: any; // TODO: update with user model
  comments: any[]; // TODO: update with comment model
}

export interface PostStateModel {
  posts: PostModel[];
  page: number;
  limit: number;
}

@State<PostStateModel>({
  name: POSTS_STATE_NAME,
  defaults: {
    posts: [],
    page: 1,
    limit: 10,
  },
})
export class PostsState {}
