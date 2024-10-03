import TextHeading from "@/components/atoms/TextHeading";
import ListTestimonialsCard from "@/components/molecules/ListTestimonialsCard";
import React from "react";

const listTesti1 = [
  {
    desc: '"There are many designers with lead in their title, but Jon is a true lead in every sense of the word. He has a keen eye for detail, tremendous design skills, is data-driven, and always keeps the customer experience at the core of his work. Collaborating with him is a pleasure as he communicates ideas clearly and concisely to stakeholders of different domains and knows how to drive and motivate a team. He also coaches and mentors designers with ease. Jon is a standout talent in the design industry and would be an asset to any team."',
    name: "Alberto Ferreira",
    jobDesk: "Service Design Lead, Lloyds Banking Group",
  },
  {
    desc: '"Working with Jon has been an absolute pleasure. His great knowledge and passion for what he does means he’s an amazing mentor and colleague. His feedback and recommendations are always on point and you can rely on his experience to improve your designs. I admire Jon’s patience and methodical approach to problems and stakeholder management."',
    name: "Maurizio Lavelle",
    jobDesk: "Lead Product Designer, M&S",
  },
  {
    desc: '"Jon is a remarkable UX leader who in addition to demonstrating excellent practical skills, led and influenced a large group of people through some difficult projects. Jons super awesome personality always ensured zero stress, and all critiques were handled with professionalism and compassion for the designers, enabling Jon to elevate the work of those around him"',
    name: "Ross Tulloch",
    jobDesk: "Principle Service Designer, Foolproof",
  },
  {
    desc: '"I’ve been fortunate to work with Jon on many projects. He’s easy to work with, super reliable and has an excellent appreciation of the web and its audiences which is highly apparent in all his work. I especially like Jon’s approach to collaborative projects. He is open minded to new ideas and others opinions, yet will always put the user first. Anyone that gets the chance to work with Jon should jump at the opportunity."',
    name: "Chris Mellish",
    jobDesk: "Executive Creative Director, Amazon",
  },
  {
    desc: '"Jon was a steady hand on the tiller at a time of huge digital growth and success within Vodafone. I enjoyed working alongside Jon in my role as Design Systems Lead, as he always championed data-driven design; adding to this, a really empathetic approach to user experience, hes been a really great ally and a great leader - and most importantly been at the heart of making so much of Vodafones UX better for our customers. And all of this with unflappable good humour and a smile on his face! Always a pleasure to work with."',
    name: "M Smith",
    jobDesk: "Design Systems Lead, Vodafone",
  },
  {
    desc: '"Its been an enormous pleasure to work with Jon at Vodafone over the last couple of years. His knowledge and passion for UX and always being customer focused is clear, and hes run many engaging workshops to help share that knowledge. Hes also managed and trained new members of the design team who go on to champion their expertise."',
    name: "Maddie McCartney",
    jobDesk: "Product Owner, Vodafone",
  },
  {
    desc: '"Jon has been a pleasure to work with, from his calm and considered approach to work through to his great rapport with others. Hes always had time to offer feedback on work, give advice on managing stakeholders and understand how to showcase our work so it lands well with the wider business. Weve worked closely on many projects and Jon is a great problem solver when designing solutions or breaking down complex propositions into easily understood concepts."',
    name: "Kirsty Oliphant",
    jobDesk: "Principle UX Consultant, BAE Systems",
  },
  {
    desc: '"There are few people you meet in the workplace who genuinely care about your output or how your daily life affects your work. Jon is such an amazing leader and always on hand to walk me through any difficult situation with a positive and easy vibe. Also, an exceptional designer who always untangles the big pain points to create an easy journey for users."',
    name: "Gabriel Akinola",
    jobDesk: "Lead Product Designer, Lloyds Banking Group",
  },
  {
    desc: '"Jon is one of the most knowledgeable and supportive people you are ever likely to meet. His UX/UI skills are superb and he is very generous with what he knows. Above all else, hes a genuine pleasure to work with and I couldnt recommend him enough, both as a UI craftsman and lead."',
    name: "Andy Turner",
    jobDesk: "User Experience Lead, IG Group",
  },
];

const listTesti2 = [
  {
    desc: '"There are many designers with lead in their title, but Jon is a true lead in every sense of the word. He has a keen eye for detail, tremendous design skills, is data-driven, and always keeps the customer experience at the core of his work. Collaborating with him is a pleasure as he communicates ideas clearly and concisely to stakeholders of different domains and knows how to drive and motivate a team. He also coaches and mentors designers with ease. Jon is a standout talent in the design industry and would be an asset to any team."',
    name: "Alberto Ferreira",
    jobDesk: "Service Design Lead, Lloyds Banking Group",
  },
  {
    desc: '"Working with Jon has been an absolute pleasure. His great knowledge and passion for what he does means he’s an amazing mentor and colleague. His feedback and recommendations are always on point and you can rely on his experience to improve your designs. I admire Jon’s patience and methodical approach to problems and stakeholder management."',
    name: "Maurizio Lavelle",
    jobDesk: "Lead Product Designer, M&S",
  },
  {
    desc: '"Jon is a remarkable UX leader who in addition to demonstrating excellent practical skills, led and influenced a large group of people through some difficult projects. Jons super awesome personality always ensured zero stress, and all critiques were handled with professionalism and compassion for the designers, enabling Jon to elevate the work of those around him"',
    name: "Ross Tulloch",
    jobDesk: "Principle Service Designer, Foolproof",
  },
  {
    desc: '"I’ve been fortunate to work with Jon on many projects. He’s easy to work with, super reliable and has an excellent appreciation of the web and its audiences which is highly apparent in all his work. I especially like Jon’s approach to collaborative projects. He is open minded to new ideas and others opinions, yet will always put the user first. Anyone that gets the chance to work with Jon should jump at the opportunity."',
    name: "Chris Mellish",
    jobDesk: "Executive Creative Director, Amazon",
  },
  {
    desc: '"Jon was a steady hand on the tiller at a time of huge digital growth and success within Vodafone. I enjoyed working alongside Jon in my role as Design Systems Lead, as he always championed data-driven design; adding to this, a really empathetic approach to user experience, hes been a really great ally and a great leader - and most importantly been at the heart of making so much of Vodafones UX better for our customers. And all of this with unflappable good humour and a smile on his face! Always a pleasure to work with."',
    name: "M Smith",
    jobDesk: "Design Systems Lead, Vodafone",
  },
  {
    desc: '"Its been an enormous pleasure to work with Jon at Vodafone over the last couple of years. His knowledge and passion for UX and always being customer focused is clear, and hes run many engaging workshops to help share that knowledge. Hes also managed and trained new members of the design team who go on to champion their expertise."',
    name: "Maddie McCartney",
    jobDesk: "Product Owner, Vodafone",
  },
  {
    desc: '"Jon has been a pleasure to work with, from his calm and considered approach to work through to his great rapport with others. Hes always had time to offer feedback on work, give advice on managing stakeholders and understand how to showcase our work so it lands well with the wider business. Weve worked closely on many projects and Jon is a great problem solver when designing solutions or breaking down complex propositions into easily understood concepts."',
    name: "Kirsty Oliphant",
    jobDesk: "Principle UX Consultant, BAE Systems",
  },
  {
    desc: '"There are few people you meet in the workplace who genuinely care about your output or how your daily life affects your work. Jon is such an amazing leader and always on hand to walk me through any difficult situation with a positive and easy vibe. Also, an exceptional designer who always untangles the big pain points to create an easy journey for users."',
    name: "Gabriel Akinola",
    jobDesk: "Lead Product Designer, Lloyds Banking Group",
  },
  {
    desc: '"Jon is one of the most knowledgeable and supportive people you are ever likely to meet. His UX/UI skills are superb and he is very generous with what he knows. Above all else, hes a genuine pleasure to work with and I couldnt recommend him enough, both as a UI craftsman and lead."',
    name: "Andy Turner",
    jobDesk: "User Experience Lead, IG Group",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 px-[120px] py-[80px] flex flex-col gap-20">
      <TextHeading text="Testimonials" />
      <div className="grid grid-cols-2 gap-20">
        {listTesti1.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl px-20 py-10 w-full">
            <div className="text-[20px]">
              <ListTestimonialsCard
                paragraph={item.desc}
                textName={item.name}
                textJobdesk={item.jobDesk}
              />
            </div>
          </div>
        ))}

        {listTesti2.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl px-20 py-10 w-2/4">
            <div className="text-[20px]">
              <ListTestimonialsCard
                paragraph={item.desc}
                textName={item.name}
                textJobdesk={item.jobDesk}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
