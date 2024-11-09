function Footer() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer className=" w-full py-5 bg-purple-800">
      <div className=" w-full flex items-center justify-center md:text-xl text-base">&copy; {year} Alaa Mohammed, All rights reserved.</div>
    </footer>
  );
}

export default Footer;
