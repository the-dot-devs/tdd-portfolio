import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={`${styles.intro_container} h-screen flex pt-20`}>
      <div className="w-full ">
        <div
          className={`${styles.logo} font-bold text-white px-6 flex justify-center space-x-6 items-center  pt-[6vh] my-4 mx-auto `}
        >
          <div className="">{"<"}</div>
          <div className="flex flex-wrap justify-center">
            <div>{"THE"}</div>
            <div className="flex">
              <div className="mr-5 lg:mx-10">{"•"}</div>
              <div>{"DEVS"}</div>
            </div>
          </div>
          <div className="">{"/>"}</div>
        </div>
        <div
          className={`text-base mt-10 sm:block sm:text-xl md:text-4xl text-white max-w-screen-lg mx-auto text-center`}
        >
          <h2 className="text-lg sm:mt-0 sm:text-3xl px-6">
            Where process and precision meets pixel perfection
          </h2>
        </div>
      </div>
    </div>
  );
}
