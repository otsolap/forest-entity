import Accordion from '@/components/blocks/Accordion';
import ArticleImage from '@/partials/article/ArticleImage';
import ArticleEmbed from '@/partials/article/ArticleEmbed';
import Banner from '@/components/blocks/Banner';
import BlogSection from '@/components/blocks/BlogSection';
import Cards from '@/components/blocks/Cards';
import FormEmbed from '@/components/blocks/FormEmbed';
import FooterColumn from '@/partials/navigation/FooterColumn';
import FooterSocialMedia from '@/partials/navigation/FooterSocialMedia';
import Hero from '@/components/blocks/Hero';
import Mediamix from '@/components/blocks/Mediamix';
import MenuItem from '@/partials/navigation/MenuItem';
import Textarea from '@/components/blocks/Textarea'
import YoutubeEmbed from '@/partials/util/YoutubeEmbed';
import Quote from '@/partials/article/Quote';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.accordion':
      Block = Accordion;
      break;
    case 'util.article-text-block':
      Block = Textarea;
      break;
    case 'util.article-image':
      Block = ArticleImage;
      break;
    case 'util.article-embed':
      Block = ArticleEmbed;
      break;
    case 'blocks.banner':
      Block = Banner;
      break;
    case 'blocks.blogs':
      Block = BlogSection;
      break;
    case 'blocks.cards':
      Block = Cards;
      break;
    case 'blocks.form-embed':
      Block = FormEmbed;
      break;
    case 'util.footer-column':
      Block = FooterColumn;
      break;
    case 'util.footer-social-media':
      Block = FooterSocialMedia;
      break;
    case 'blocks.hero':
      Block = Hero;
      break;
    case 'blocks.media-mix':
      Block = Mediamix;
      break;
    case 'util.menu-item':
      Block = MenuItem;
      break;
    case 'blocks.text-area':
      Block = Textarea;
      break;
    case 'util.youtube-embed':
      Block = YoutubeEmbed;
      break;
    case 'util.quote':
      Block = Quote;
      break;
    default:
      console.error(`No component found for: ${__component}`)
      break;
  }

  return Block ? (
    <Block key={`index-${index}`} {...rest} />
   ) : null;
};

const Blocks = ({ blocks }) => {
  return (
      blocks.map(getBlockComponent)
    )
  ;
};

export default Blocks;