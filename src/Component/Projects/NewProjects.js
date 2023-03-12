function NewProjects() {
  const data = [
    {
      id: "01",
      name: "Random Jokes",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut odit laborum aliquam voluptatum nisi mollitia.",
      skills: ["react", "vercel", "axios", "router"],
      mlink: "https://github.com/P4CKt",
      plink: "https://github.com/P4CKt?tab=repositories",
    },
    {
      id: "02",
      name: "Random Jokes",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut odit laborum aliquam voluptatum nisi mollitia.",
      skills: ["react", "vercel", "prasa", "axios", "router"],
      mlink: "https://github.com/P4CKt",
      plink: "https://fsweb-s10-challenge-lime.vercel.app/",
    },
    {
      id: "01",
      name: "Random Jokes",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut odit laborum aliquam voluptatum nisi mollitia.",
      skills: ["react", "vercel", "axios", "router"],
      mlink: "https://github.com/P4CKt",
      plink: "https://github.com/P4CKt?tab=repositories",
    },
  ];
  const colors = ["#EAC7C7", "#A0C3D2", "#F7F5EB", "#EAE0DA"];
  function random() {
    Math.floor(Math.random() * 4);
  }
  const bg = String(colors[random()]);
  console.log(bg);
  return (
    <div className="flex-wrap flex justify-center">
      {data.map((item) => (
        <div key={item.id} className=" flex ">
          <div className="flex flex-col box-border  sm:mx-[3.2rem] w-[36rem]  sm:w-[50rem] ">
            <div className={`pl-[4rem]  rounded-[12px] bg-[#A0C3D2]`}>
              <h1 className="font-['Playfair-Display']  pt-[4.6rem] text-[2.9rem] pb-0 leading-[3.9rem] my-0 font-[700] text-left">
                {item.name}
              </h1>
              <div>
                <p className="pr-[9.2rem] text-left pt-[1.9rem] text-[1rem] sm:text-[1.6rem] font-[400]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                </p>
              </div>
              <div className="flex-wrap pb-[3.5rem]	flex text-[1rem]  sm:text-[1.6rem] pr-[19rem] font-['Playfair-Display'] font-[700] ">
                {item.skills.map((items) => (
                  <p
                    key={items}
                    className="bg-white pt-[1rem] mx-[.45rem] mb-0 pr-[1rem] rounded-[76px] pl-[1rem] pb-[1rem] sm:p-[6px_20px_10px] "
                  >
                    {items}
                  </p>
                ))}
              </div>

              <div className="flex font-['Inter'] pb-[20rem] sm:pb-[32.6rem] font-[600] sm:text-[2rem] text-[1.6rem]">
                <a
                  href={item.mlink}
                  className=" flex-1 no-underline text-black text-left"
                >
                  View on Github
                </a>
                <a
                  href={item.plink}
                  className=" text-right no-underline text-black flex-1 pr-[3.9rem]"
                >
                  Go to app
                </a>
              </div>
            </div>
            <div className="justify-center sm:mt-[-245px]  mt-[-180px]  mb-[50px] flex">
              <img
                alt="mockup"
                className="rounded-xl w-[36rem]  sm:w-[50rem]"
                src="./img/first-projects.png"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewProjects;
