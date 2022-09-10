import { Navbar } from 'flowbite-react';
import React, { useCallback, useState } from 'react';
import Button from '../atoms/button/Button';
import Image from '../atoms/Image';
import Span from '../atoms/typography/Span';

type NavLinkType = {
  link: string;
  label: string;
};

const Header: React.FC<{
  navLinks: NavLinkType[];
}> = ({ navLinks }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveLink = useCallback(() => {
    setIsActive(true);
  }, []);

  return (
    <Navbar>
      <Navbar.Brand>
        <Image
          src="https://flowbite.com/docs/images/logo.svg"
          alt="logo"
          width={10}
          height={10}
        />
        <Span title="Taro Nguyen" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Button
          buttonLabel="Login"
          color="success"
          size="md"
          handleFn={() => alert('Logged in')}
          gradientDuoTone="purpleToBlue"
        />
      </div>
      <Navbar.Collapse>
        {navLinks.map((nl, index) => (
          <Navbar.Link
            href={nl.link}
            active={isActive}
            key={index}
            onClick={handleActiveLink}
          >
            {nl.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
