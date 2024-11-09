/* eslint-disable react/prop-types */
function Button({ children, btnAnimated }) {
  const primary =  <button className="hover:text-purpl-500 group relative flex min-h-[50px] w-40 items-center justify-center overflow-hidden rounded-2xl border border-purple-500 bg-purple-500 text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-300 hover:before:h-full hover:after:h-full" type="submit">
      <span className="after:bg-white-500 top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-white before:duration-300 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-white after:duration-300 hover:text-purple-500 group-hover:before:h-full group-hover:after:h-full"></span>
      <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center font-semibold group-hover:text-purple-500">
        {children}
      </span>
  </button>
  
  const secondary = (
    <button className="group relative flex min-h-[50px] w-40 items-center justify-center overflow-hidden rounded-2xl border border-purple-500 bg-stone-50 text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-300 hover:text-white hover:before:h-full hover:after:h-full">
      <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-300 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-300 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
      <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center font-semibold group-hover:text-white">
        {children}
      </span>
    </button>
  );

  if (btnAnimated === "primary") {
  return primary;
  }
  if (btnAnimated === "secondary")
 return secondary
}

export default Button
