import { motion } from "framer-motion";
import { SelectedPage } from "../configs/enums";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import HText from "./HText";

interface ClassType {
  name: string;
  description: string;
  image: string;
}

interface Props {
  setSelectedPage(page: SelectedPage): void;
}

const Classes = ({ setSelectedPage }: Props) => {
  const classes: ClassType[] = [
    {
      name: "Weigth Training Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image1,
    },
    {
      name: "Yoga Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image4,
    },
    {
      name: "Fitness Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum provident possimus maxime molestiae est?",
      image: image6,
    },
  ];

  return (
    <section id="classes" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <div className="mx-auto w-5/6">
          <div className="lg:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quaerat dolorem neque perferendis tempore
              consequatur inventore necessitatibus praesentium itaque, iusto
              obcaecati veniam, dolore, deserunt quasi iure voluptatem animi
              sequi facere!
            </p>
          </div>
        </div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item) => (
              <li className="relative mx-5 inline-block h-[380px] w-[450px]">
                <div className="p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
                  <p className="text-2xl">{item.name}</p>
                  <p className="mt-5">{item.description}</p>
                </div>
                <img src={item.image} alt={item.image} />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
