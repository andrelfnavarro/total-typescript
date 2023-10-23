import { ObjectOf } from 'ts-toolbelt/out/List/ObjectOf';
import { Equal, Expect } from '../helpers/type-utils';

type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`;

type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string;
};

// or
// type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
