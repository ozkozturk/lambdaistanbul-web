import React, { FC } from 'react';
import { PostPageProps } from './types';
import { PostPageContentStyled, PostPageStyled } from './styled';

const PostPage: FC<PostPageProps> = ({ text }) => {
  return (
    <PostPageStyled>
      <PostPageContentStyled>
        <article>
          <div className="post-media">
            <img className="media" src="https://source.unsplash.com/1440x800?pride" alt="post" />
          </div>
          <div className="post-content">
            <header className="entry-header">
              <div className="entry-meta">
                <span>17 JAN, 2018</span>
                <span>4 COMMENTS</span>
                <span>COMMUNITY</span>
              </div>
              <h2>Lorem ipsum dolor sit amet.</h2>
            </header>
            <div className="entry-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias, consectetur cupiditate deserunt dignissimos dolore dolores ea id iste itaque labore laboriosam magni natus officia perferendis placeat qui, quis quo rem repellendus saepe, sint sit tempora ullam vel voluptate?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus ea est excepturi illo in labore necessitatibus numquam omnis, ratione sed, veniam voluptas. Aliquid, atque deleniti dolor ea minus necessitatibus nesciunt ratione ullam. Cupiditate.</p>
              <blockquote cite="https://wwww.google.com">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quae quisquam recusandae unde vero.</p>
                <footer>
                  -Mr. Spock,
                  <cite>Star Trek</cite>
                </footer>
              </blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque laudantium maxime, nostrum odio perferendis provident sed? Animi aut cum cumque ea earum eveniet fugit id incidunt inventore nulla, officia porro praesentium quam ratione repellendus saepe tempora tenetur voluptas voluptate!</p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <div className="inline-section">
                <img src="https://via.placeholder.com/300x266" alt="post" />
                <div className="inline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illum ipsum molestias nobis optio provident quae quo rem veniam voluptatem. Adipisci assumenda dicta et facere fuga, hic iusto labore maxime molestiae nulla odit quam, vero.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur atque, aut debitis distinctio doloremque eligendi harum illo maxime necessitatibus, nesciunt non quas repellat ullam vitae. Dicta dignissimos, eligendi explicabo fugit inventore odit porro quae, quidem quod, quos sequi sit.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae deserunt et, eveniet excepturi minus porro possimus quis rerum? Accusantium animi aut autem consequuntur deleniti distinctio iusto, temporibus voluptatibus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolorem eius fugiat id natus non obcaecati quam sint voluptas.</p>
            </div>
          </div>
        </article>
        <div className="share-post">
          <a href="/">T</a>
          <a href="/">T</a>
          <a href="/">T</a>
          <a href="/">T</a>
          <a href="/">T</a>
          <a href="/">T</a>
        </div>
      </PostPageContentStyled>
    </PostPageStyled>
  );
};

export default PostPage;
