import "./testemoni.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jeremy-Tesh",
      title: "Senior Developer",
      img: "https://avatars.githubusercontent.com/u/59338167?v=4",
      icon: "assets/twitter.png",
      github:"https://www.linkedin.com/in/ermias-teshome-567398197/",
      desc: "I had an excellent experience with Henok. He was quick to get to work, completed the tasks assigned to him on time, and was very communicative. We collaborated on a React/Typescript project, and I can attest to his abilities.",
    },
    {
      id: 2,
      name: "Abreham Gezahegn",
      title: "Full-stack Developer",
      img: "https://avatars.githubusercontent.com/u/41052674?v=4",
      icon: "assets/youtube.png",
      desc: "Henok is a highly professional and skilled developer.  Delivered a code that is clean, readable and tested. Anyone can get onboarded on it quickly. It was an absolute pleasure reading his code. - Responds to messages swiftly. - Incorporates changes without a hiccup and asks relevant questions. Fantastic freenlancer! I will definitely work with him again. Cheers!",
      featured: true,
      github:"https://www.linkedin.com/in/abreham-gezahegn-40a991166/",

    },
    {
      id: 3,
      name: "Michel",
      title: "CEO of Nt soft",
      img: "./photo_2021-11-17_00-34-49.jpg",
      icon: "assets/linkedin.png",
      github:"https://www.linkedin.com/company/ntsoft/about/",
      desc: "Henok is a highly talented React developer who can do tasks rapidly while maintaining excellent quality. He is a highly communicative man in whom I have complete faith. I want to thank him for his generosity, the passion he brings to every task, no matter how basic, and for consistently exceeding my expectations.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 ><span>Testimonials</span></h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img className="user" src={d.img} alt="" />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">"{d.desc}"</div>
            <div className="bottom">
              <h4>{d.name}</h4>
              <h4>{d.title}</h4>
            <span> <a rel="noreferrer" target='_blank' href={d.github}>@{d.name}</a></span> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
