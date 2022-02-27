import Video from "./Video";
import Article from "./Article";
import withWrapper from "./withWrapper";

const VideoWithWrapper = withWrapper(Video);
const AticleWithWrapper = withWrapper(Article);
export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithWrapper key={Math.random(10000)} {...item} />
        );
      case 'article':
        return (
          <AticleWithWrapper key={Math.random(10000)} {...item} />
        );
      default:
        return null;
    }
  });
};