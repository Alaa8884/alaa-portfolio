function Footer() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer className="w-full bg-purple-800 py-5">
      <div className="flex w-full items-center justify-center sm:text-sm font-semibold md:text-xl">
        &copy; {year} Alaa. M,  All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
