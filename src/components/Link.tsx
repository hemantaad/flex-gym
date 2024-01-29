import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../configs/enums";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage(page: SelectedPage): void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase() as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : "text-gray-500"
      } transition duration-500 hover:text-primary-300`}
      //   href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
