import React from "react";

interface SocialLink {
  name: string;
  link: string;
  icon: string;
  alt: string;
}

const socials: SocialLink[] = [
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
            <div className="hidden mt-7 sm:flex sm:flex-row sm:flex-wrap justify-center items-center text-center gap-3">

      {/* <div className="hidden mt-7 lg:flex lg:flex-row lg:flex-wrap justify-center items-center text-center gap-3"> */}
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
    </div>
  );
};


// const ContactSticky = () => {
//   return (
//     <div className="z-50 sticky md:top-10 md:rounded-full md:transition-all md:duration-500 md:ease-in-out h-0">
//       <div className="hidden md:flex pt-52 md:px-10 gap-2 md:gap-5 flex-col justify-items-end items-end">
//         {socials.map((social) => (
//           <a
//             href={social.link}
//             alt={social.alt}
//             title={social.alt}
//             key={social.name}
//           >
//             <img src={social.icon} alt={social.alt} className="max-h-12" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default { Contact, ContactSticky };

export default Contact;