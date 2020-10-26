import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Articles from '../components/articles';
import Query from '../components/query';
import ARTICLES_QUERY from "../queries/article/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;