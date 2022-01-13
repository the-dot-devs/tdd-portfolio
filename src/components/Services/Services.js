import HeaderBar from "../../common/HeaderBar";
/* import { DesktopComputerIcon } from "@heroicons/react";
 */
export default function Services() {
  return (
    <section id="services" className="w-full ">
      <div className="max-w-screen-2xl mx-auto bg-slate-600 rounded-3xl relative z-10">
        <HeaderBar id="Services" text="Services We Provide" />
        <div className="p-6 py-16 flex bg-slate-800 pb-20">
          <div className="flex flex-wrap mx-auto justify-center">
            {servicesObject.map((service) => (
              <div
                key={service.text}
                className="max-w-[250px] max-h-[250px] flex flex-col justify-end mx-8 my-4"
              >
                <div>{service.svg}</div>
                <div className="text-center text-white">{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const servicesObject = [
  {
    text: "Web Development",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="white"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    text: "Mobile Development",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="white"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    text: "Product Design",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="white"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    text: "Discovery Phase",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="white"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];
