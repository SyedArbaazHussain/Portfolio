const socials = [
  {
    name: "Github",
    link: "https://github.com/SyedArbaazHussain",
    icon: "https://img.icons8.com/?size=100&id=CexFs1lac6J7&format=png&color=000000",
    alt: "Portfolio",
  },
  {
    name: "Email",
    link: "mailto:arbaaz14122002@gmail.com",
    icon: "https://img.icons8.com/?size=100&id=YbPqIO0gOrT3&format=png&color=000000",
    alt: "Email",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-arbaaz-hussain-7267ab228",
    icon: "https://img.icons8.com/?size=100&id=QSqKhX2FC4oX&format=png&color=000000",
    alt: "LinkedIn",
  },
  {
    name: "X",
    link: "https://x.com/_arbxxz_",
    icon: "https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000",
    alt: "Twitter",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/958402736670531585",
    icon: "https://img.icons8.com/?size=100&id=CoF7xQDp3Z7e&format=png&color=000000",
    alt: "Discord",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_.arbxxz_",
    icon: "https://img.icons8.com/?size=100&id=NdqqxfTuEK6C&format=png&color=000000",
    alt: "Instagram",
  },
  {
    name: "Telegram",
    link: "https://t.me/itsmenaughtyboy",
    icon: "https://img.icons8.com/?size=100&id=8Lxp0mBu2EEF&format=png&color=000000",
    alt: "Telegram",
  },
];

const Contact = () => {
  return (
    <div>
      <div className="hidden mt-7 max-sm:flex max-sm:flex-row max-sm:flex-wrap justify-center items-center text-center gap-3">
        {socials.map((social) => (
          <a
            href={social.link}
            alt={social.alt}
            title={social.alt}
            key={social.name}
          >
            <img src={social.icon} alt={social.alt} className="max-h-10" />
          </a>
        ))}
      </div>
      <div className="hidden sm:grid mt-7 sm:px-10 justify-center items-center text-center gap-2 lg:gap-5 grid-flow-col">
        {socials.map((social) => (
          <a
            href={social.link}
            alt={social.alt}
            title={social.alt}
            key={social.name}
          >
            <img src={social.icon} alt={social.alt} className="max-h-12" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
