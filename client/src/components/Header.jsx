import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid className="border-b-2 flex justify-center ">
      <Navbar.Brand>
        <img src="/blackcofferLogo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className=" italic text-2xl font-bold pt-1 h-6 sm:h-9">Assignment</span>
      </Navbar.Brand>
    </Navbar>
  )
}

export default Header
