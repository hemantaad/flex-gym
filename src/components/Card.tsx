import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../configs/enums";

interface Card {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  content: Card;
  setSelectedPage(page: SelectedPage): void;
}

const Card = ({ content, setSelectedPage }: Props) => {
  const { icon, title, description } = content;
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="flex justify-center mb-4">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
      >
        Learn More
      </AnchorLink>
    </div>
  );
};

export default Card;
