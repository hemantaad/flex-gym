import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../configs/enums";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "./ActionButton";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphics from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage(page: SelectedPage): void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1024px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 lg:h-full lg:pb-0">
      {/* IMAGES AND HEADERS */}
      <motion.div
        className="lg:flex items-center justify-center mx-auto w-5/6 lg:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 lg:basis-3/5">
          {/* HEADING */}

          <div className="lg:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-10] lg:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              alias quos hic repellendus suscipit delectus cupiditate placeat
              mollitia error reiciendis atque, consequuntur explicabo?
              Necessitatibus, sit ratione.
            </p>
          </div>
          {/* ACTIONS */}

          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
            >
              Learn More
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}

        <div className="flex basis:3/5 justify-center lg:ml-40 lg:mt-16 lg:justify-items-end lg:z-10">
          <img src={HomePageGraphics} alt="home-page-graphics" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
