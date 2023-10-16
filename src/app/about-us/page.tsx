import React from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { AboutUsHero } from "@/components/organism/sections/about-us/about-us-hero";
import { AboutUsOurTeam } from "@/components/organism/sections/about-us/our-team";
import { AboutUsTeam } from "@/components/organism/sections/about-us/team-members";
import { GA } from "@/components/atoms/analitiycs";


const data = {
    "title": "We’re Building a Simpler Way to Gather Info from Customers!",
    "desc": "At SalesAssist, our mission is to eliminate all waste from the sales process.",
    "our_values": {
        "name": "Our Values",
        "values": [
            { "code": "FOI", "title": "Focus on Impact", "desc": "What matters is the level of impact."},
            { "code": "SO", "title": "Stay Open", "desc": "An open heart and mind is our source of power."},
            { "code": "PS", "title": "Profound Support", "desc": "We are responsible for the success of each other – we succeed together."},
            { "code": "TBS", "title": "Take Bold Steps", "desc": "Think big. Start small. Fail forward."},
            { "code": "RR", "title": "Radical Resourcefulness", "desc": "We have everything we need to succeed – it’s about finding the unseen path."},
            { "code": "EO", "title": "Everyone is an Owner", "desc": "We all share the same passion for the product, company, and customers."}
        ]
    }
}
const data2={
    "title": "Our Team",
    "desc": "We’re a tight knit team doing big things",
    "team": {
        "title": "Team members",
        "members": 9
    },
    "founded": {
        "title": "Founded in",
        "year": 2021
    },
    "countries": {
        "title": "Countries represented",
        "countries": 3
    }
}
const data3={
    "team": [
        { "name": "Jow Perez", "title": "Co-founder & CEO", "social": "http://jowperez.com/", "code": "JowPerez" },
        { "name": "Snow Dong", "title": "Co-founder & CPO", "social": "https://www.linkedin.com/in/snowcanfly/", "code": "SnowDong" },
        { "name": "Max Castro", "title": "Co-founder & CTO", "social": "https://www.linkedin.com/in/maximo-castro-pou/", "code": "MaxCast" },
        { "name": "Samuel Mancebo", "title": "Mobile Lead", "social": "https://www.linkedin.com/in/samuel-mancebo-800996a6/", "code": "SamMan" },
        { "name": "Rogelio Morey", "title": "Web Lead", "social": "https://www.linkedin.com/in/rogelio-morey/", "code": "RogMo" },
        { "name": "Bryan Astacio", "title": "Mobile/Web Lead", "social": "https://www.linkedin.com/in/bryan-astacio/", "code": "BryAst" },
        { "name": "Scottie Sigmon", "title": "VP of Partnerships", "social": "https://www.linkedin.com/in/scottie-sigmon-cdmp-pcm%C2%AE-dm-39220070/", "code": "ScoSig"},
        { "name": "Santo Mota", "title": "Software Engineer", "social": "https://www.linkedin.com/in/santo-antonio-mota-matos-09b17388/", "code": "SanMo" },
        { "name": "YY", "title": "Product Designer", "social": "https://www.linkedin.com/in/yifei-yin-18691ba9/", "code": "YY" }
    ]
}

export default function page() {
  return (
    <>
      <Header></Header>
      <GA/>
      <AboutUsHero data={data}></AboutUsHero>
      <AboutUsOurTeam data={data2}></AboutUsOurTeam>
      <AboutUsTeam data={data3}></AboutUsTeam>
      <Footer kind="dark"></Footer>
    </>
  );
}
