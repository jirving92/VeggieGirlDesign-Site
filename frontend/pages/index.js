import Query from '../components/query';
import HOME_QUERY from '../queries/home/home';
import Logo from '../components/logo/logo';
import Menu from '../components/menu/menu';
import ImageCarousel from '../components/imageCarousel/imageCarousel';

const Home = () => {
  return (
    <div>
      <Query query={HOME_QUERY}>
      {({ data: { home } }) => {
        const imageUrl =
        process.env.NODE_ENV !== "development"
          ? home.logo.url
          : process.env.REACT_APP_BACKEND_URL + home.logo.url;

          const slideShowImages = home.slideshow;
        return (
          <div>
            <Logo url={imageUrl}></Logo>
            <Menu/>
            <ImageCarousel imageUrls={slideShowImages}></ImageCarousel>
          </div>
        );
      }}
      </Query>
    </div> 
  );
};

export default Home;