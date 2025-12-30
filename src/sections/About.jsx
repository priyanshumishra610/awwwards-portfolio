import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Blockchain Developer with practical experience
    building and testing smart contracts
    from concept to deployment`;
  const aboutText = `Blockchain Developer with practical experience building and testing smart contracts using Solidity and Remix. Knowledgeable in blockchain architecture, consensus mechanisms, cryptographic hashing, and transaction lifecycle. Experienced in deploying basic DApps, interacting with contracts using Web3 libraries, and implementing secure coding practices.

Passionate about decentralization, Web3 innovation, and applying blockchain technology to solve real-world security and data integrity challenges.

 
- Strong fundamentals in blockchain, smart contracts, and Web3 tools
- Fast learner with ability to pick up new technologies quickly
- Hands-on experience through multiple beginner blockchain projects
- Good research mindset with interest in cybersecurity + blockchain security
- Highly motivated, consistent, and hardworking with strong problem-solving skills`;
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
