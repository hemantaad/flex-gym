import { SelectedPage } from "../configs/enums";
import { motion } from "framer-motion";
import HText from "./HText";
import Card from "./Card";
import { HiHomeModern, HiAcademicCap } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import ActionButton from "./ActionButton";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";

interface Props {
  setSelectedPage(page: SelectedPage): void;
}

const benefits = ({ setSelectedPage }: Props) => {
  const benefitCard: Card[] = [
    {
      icon: <HiHomeModern className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus expedita optio repellat praesentium eum possimus quia harum illum dolore?",
    },
    {
      icon: <MdGroups className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus expedita optio repellat praesentium eum possimus quia harum illum dolore?",
    },
    {
      icon: <HiAcademicCap className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus expedita optio repellat praesentium eum possimus quia harum illum dolore?",
    },
  ];
  return (
    <section id="benefits" className="mx-auto w-5/6 min-h-full py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="lg:my-5 lg:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            tempora blanditiis molestiae repellendus libero corporis voluptate
            iste quos itaque ad? Mollitia quaerat quo tempore quae quis dolorem
            quae quis dolorem.
          </p>
        </div>
        <div className="lg:flex items-center justify-between gap-8 mt-5">
          {benefitCard.map((content: Card) => (
            <Card
              key={content.description}
              setSelectedPage={setSelectedPage}
              content={content}
            />
          ))}
        </div>
        <div className="mt-16 items-center justify-between gap-20 lg:mt-28 lg:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <HText>MILLIONS OF HAPPY MEMBERS GETTING FIT</HText>
              </div>
              <div>
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  autem sint necessitatibus atque tenetur aperiam, placeat
                  corporis fugit assumenda adipisci animi nisi ipsum voluptate
                  recusandae beatae accusantium reprehenderit harum odio magnam
                  optio ab, laboriosam at quae vel. Ut blanditiis nisi neque
                  corporis excepturi recusandae quae, voluptas tenetur molestiae
                  alias sint.
                </p>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  autem sint necessitatibus atque tenetur aperiam, placeat
                  corporis fugit assumenda adipisci animi nisi ipsum voluptate
                  recusandae beatae accusantium reprehenderit harum odio magnam
                  optio ab, laboriosam at quae vel. Ut blanditiis nisi neque
                  corporis excepturi recusandae quae, voluptas tenetur molestiae
                  alias sint.
                </p>
              </div>
              <div className="relative">
                <div className="before:absolute before:-bottom-20 before:right-40 z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default benefits;
