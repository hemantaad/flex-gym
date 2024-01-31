import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 lg:flex">
        <div className="mt-16 basis-1/2 lg:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis magni ad excepturi fugiat quis, sequi ipsum, repellendus
            laborum ut non autem quidem dolorum molestiae doloribus itaque.
            Labore dolorem molestiae aliquid.
          </p>
          <p>&copy; All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum .</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p>+977-0123456789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
