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
  ];
  const colors = ["#EAC7C7", "#A0C3D2", "#F7F5EB", "#EAE0DA"];
  let random = () => Math.floor(Math.random() * 3);

  return (
    <div className="flex-wrap flex">
      {data.map((item) => (
        <div key={item.id} className=" flex   ">
          <div className="flex flex-col box-border mr-[3.2rem] w-[50rem]">
            <div className="pl-[4rem]  rounded-[12px]  + `${bg-black}`">
              <h1 className="font-['Playfair-Display']  mt-[4.6rem] text-[2.9rem] mb-0 leading-[3.9rem] font-[700] text-left">
                {item.name}
              </h1>
              <div>
                <p className="mr-[9.2rem] text-left mt-[1.9rem] text-[1.6rem] font-[400]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                </p>
              </div>
              <div className="flex-wrap pb-[3.5rem]	flex text-[1.6rem] pr-[19rem] font-['Playfair-Display'] font-[700] ">
                {item.skills.map((items) => (
                  <p
                    key={items}
                    className="bg-white  mt-[1rem] mb-0 mr-[1rem] rounded-[76px] p-[6px_20px_10px] "
                  >
                    {items}
                  </p>
                ))}

                {/* <p className="bg-white mt-[1rem] mb-0 mr-[1rem] rounded-[76px] p-[6px_20px_10px]">
                  vercel
                </p>
                <p className="bg-white mt-[1rem] mb-0 mr-[1rem] rounded-[76px] p-[6px_20px_10px]">
                  axios
                </p>
                <p className="bg-white mt-[1rem] mb-0 mr-[1rem] rounded-[76px] p-[6px_20px_10px]">
                  router
                </p> */}
              </div>

              <div className="flex font-['Inter'] pb-[32.6rem] font-[600] text-[2rem]">
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
            <div className="justify-center  relative bottom-[243px] flex">
              <img
                className="w-[40rem] rounded-xl"
                src="./img/mockup-gunluk.jpeg"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewProjects;
