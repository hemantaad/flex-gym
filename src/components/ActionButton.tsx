import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../configs/enums";

interface Props {
  setSelectedPage(page: SelectedPage): void;
  children: string;
}

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      // href=`#${SelectedPage.Contact}`
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
