import gql from 'graphql-tag';

const HOME_QUERY = gql`
query Home {
	home {
    id,
    logo {
      url
    },
    aboutMe,
    aboutMeImage {
      url
    },
    slideshow {
      url
    },
    featuredProducts {
      url
    }
  }
  }
`;

export default HOME_QUERY;