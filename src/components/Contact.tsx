import { SelectedPage } from "../configs/enums";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HText from "./HText";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "The name must be at least 3 character long." }),
  email: z.string().min(1, { message: "Email field is required." }),
  message: z
    .string()
    .min(10, { message: "The message must be at least 10 character long." }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setSelectedPage(page: SelectedPage): void;
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    console.log(data.message);
  };
  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <div className="lg:w-3/5">
          <HText>JOIN NOW TO GET IN SHAPE</HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quaerat dolorem neque perferendis tempore consequatur
            inventore necessitatibus praesentium itaque, iusto obcaecati veniam,
            dolore, deserunt quasi iure voluptatem animi sequi facere!
          </p>
        </div>
        <div className="mt-10 justify-between gap-8 lg:flex">
          <div className="mt-10 basis-3/5 lg:mt-0">
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              action="https://formsubmit.co/fakemail@gmail.com"
              method="POST"
            >
              <input
                {...register("name")}
                id="name"
                className={inputStyles}
                type="string"
                placeholder="Enter full name."
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">{errors.name.message}</p>
              )}
              <input
                {...register("email")}
                id="email"
                className={inputStyles}
                type="email"
                placeholder="Email."
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">{errors.email.message}</p>
              )}
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="Enter message."
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.message}
                </p>
              )}
              <button
                disabled={!isValid}
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="mt-16 basis2/5 lg:mt-0">
            <img
              className="w-full"
              src={ContactUsPageGraphic}
              alt="sontact-us-graphics"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
