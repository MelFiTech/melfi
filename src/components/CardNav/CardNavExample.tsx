"use client";
import React from 'react';
import CardNav from './CardNav';

const CardNavExample: React.FC = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#about", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#projects", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:hello@melfi.agency", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com/melfi", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com/company/melfi", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/MELFI-LOGO.png"
      logoAlt="Melfi Agency Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default CardNavExample;
