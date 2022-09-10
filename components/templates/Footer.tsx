import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faGoogle,
  faGitSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, faFacebook);
library.add(fab, faGoogle);
library.add(fab, faGitSquare);
library.add(fab, faTwitter);

const Footer = () => {
  return (
    <FlowbiteFooter>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FlowbiteFooter.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="about" />
              <FlowbiteFooter.LinkGroup>
                <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us " />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Terms & Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="Flowbite" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon
              href="#"
              icon={(<FontAwesomeIcon icon={['fab', 'facebook']} />) as any}
            />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
