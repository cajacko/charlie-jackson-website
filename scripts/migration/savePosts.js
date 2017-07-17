import { createClient } from 'contentful-management';
import getPosts from './getPosts';
import savePost from './savePost';

function savePosts(typeIds, space, posts, i) {
  let iterator = i;

  if (iterator === undefined) {
    iterator = 0;
  }

  console.log(posts[i]);

  savePost(typeIds, space, posts[i])
    .then(() => savePosts(space, posts, iterator + 1));
}

const client = createClient({
  accessToken: '',
});

client.getSpace('1gvc9x9hfuhs')
  .then((space) => {
    space.getContentTypes()
      .then(({ items }) => (
        getPosts(posts => (
          savePosts(items, space, posts)
        ))
      ));
  });
