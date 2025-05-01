import { Building, University, Heart, DownloadCloud } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "~/components/ui/button";

export function About() {
  const timeline = [
    {
      icon: <Building className="h-4 w-4 text-white" />,
      title: "First steps into the Tech world !",
      period: "July 2022 – Present",
      content:
        "Back in the day i was arround 13-14 years old. Like many boys i loved playing game and we played often. A person introduced me that he work in tech and i wasn't impressed at all because my perception at the time was(And even now almost 80% malagasy people thinked the way i thinked) that Tech guys work is phone, TV and laptop repairer, Movie/Music sharer(It is alil work here!).\n But a few time later The same person introduced to me the real work in Tech like cybersecurity(me in my head: Aha i will hack NASA...), AI, Android app development... And i stoped on android dev because that is the world that(capte ma tete),  after that i was very curious how people build android apps(bc it was cool and i can show up to my friend that i can build a android app:-) and that was cool ).So i asked him to teach to me a lil bit of cybersecurity, android app dev and so there begin my first step into the development/coding word.\nI started coding since that day and never stop till today until the time i will become a _goose farmer_.",
    },
    {
      icon: <University className="h-4 w-4 text-white" />,
      title: "The journey that drove me to follow university program and started my first professional work",
      period: "2021 – 2024",
      content:
        "After that i re-started  learning java and started a bit on the feet of web app development using plain html, css and a bit of Javascript and learn new langage like python with which i built my fisrt fullstack apps(I followed mosh tutorial for all of those new learning). i build some lil cli and web pages on my own sauce. And all of that was just passion at the time and i did it bc i loved it and that every new things ilearn blew my mind(even my first Hello World and changing the text to Hello maholy(My name))\n I just got my _BACCALAURETAT(High school grade)_ and i spent many times coding and learning new things arround it.\n I aplyied for a university and got accepted but at the final inscription my parents refused bc the tuition was very high for us(we are a humble worker family), I was disapointed but i knew too that i forced a bit myself for that one. So i stoped looking for an university and just wanna be a selftaught developer and will become a freelancer or Indie hacker(Startuper) but soon i knew that i can't do that(at least back in the day) so i re-started looking for an university and a university called HEI passed on my facebook feed but i roughly read their general program and things arround that, ... \n\n\nFew days after that a person re-introduced me that same university to i was curious...\nI started looking into theuir program and seeacrhed on the internet all professors and their founder. Their was a google developer, An inspiring _Dcotorant_ which is now a real Doctor at this time i write this, a cracked genius Founder bc i looked into his resume, and one things that i noticed was that they was all very young but allready at a level that is great(At least on my point of view). I started readl their long version of the program(which was arround 3 or 5 pages) and i read it at least 10 times, there was many gibrish words and tech thing that i didn't know and started looking into those keywords and then after a long 2/1 month i decided to apply for that University got into the entrance exam and I was accepted, so there started my path into coding followinga great program and started working on the field even before 9 month studing there and guess what... My first job was a mobile dev role(We used React Native), so there started my struggle, my aha times, and alot of other things till now i am working on the field and will continue to learn many things becasue in Tech eveithing allways change there is allways something new, you will never be bored bc you must allways move and learn... So that was my journey along i(Thanks to every person that contributed inderctly or directly into this long path bc i'm sure that i did not arrived in my current state if noone helped me along the way))",
    },
    {
      icon: <Heart className="h-4 w-4 text-white" />,
      title: "Interests & Hobbies",
      period: "",
      content:
        "Open‑source contributor, tech blogger, love music and always learning new libraries & frameworks.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Timeline */}
        <div className="flex-1 px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-center font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl"
          >
            I'm Tsirimaholy, full‑stack developer passionate about building
            scalable, performant web applications. Here's a quick timeline of my
            journey and what lead me into this path.
          </motion.p>

          <ul className="relative border-l border-primary/20 pl-6 space-y-12">
            {timeline.map((event, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold ml-5">
                  {event.title}{" "}
                  {event.period && (
                    <span className="text-sm text-muted-foreground">
                      — {event.period}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-muted-foreground">{event.content}</p>
              </motion.li>
            ))}
          </ul>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <div className="group relative inline-block">
              <Button
                asChild
                className="inline-flex items-center gap-2 px-6 py-2 transition-transform transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <a href="/Tsirimaholy_resume.pdf" download>
                  <DownloadCloud className="h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Click to download my resume!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
