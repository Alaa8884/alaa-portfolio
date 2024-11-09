function Footer() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer className="w-full bg-purple-800 py-5">
      <div className="flex w-full items-center justify-center text-base font-semibold md:text-xl">
        &copy; {year} Alaa Mohammed, <span className="text-black ml-1 "> All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
