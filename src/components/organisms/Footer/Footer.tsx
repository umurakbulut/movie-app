import React from 'react';
import { Icon, Link, Typography } from '@/components/atoms';
import './_footer.scss';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://www.facebook.com',
      ariaLabel: 'Facebook',
      iconClass: 'fab fa-facebook',
    },
    {
      href: 'https://www.instagram.com',
      ariaLabel: 'Instagram',
      iconClass: 'fab fa-instagram',
    },
    {
      href: 'https://www.twitter.com',
      ariaLabel: 'Twitter',
      iconClass: 'fab fa-twitter',
    },
    {
      href: 'https://www.youtube.com',
      ariaLabel: 'YouTube',
      iconClass: 'fab fa-youtube',
    },
  ];

  const footerLinks = [
    {
      href: '#',
      text: 'Conditions of Use',
    },
    {
      href: '#',
      text: 'Privacy & Policy',
    },
    {
      href: '#',
      text: 'Press Room',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__social-media">
        {socialLinks.map((link, index) => {
          const { href, ariaLabel, iconClass } = link;

          return (
            <Link
              key={`link-${index}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
            >
              <Icon name={iconClass} />
            </Link>
          );
        })}
      </div>

      <div className="footer__links">
        {footerLinks.map((link, index) => {
          const { href, text } = link;

          return (
            <Link key={`link-${index}`} href={href}>
              {text}
            </Link>
          );
        })}
      </div>

      <div className="footer__copyright">
        <Typography>&copy; 2024 Movies App</Typography>
      </div>
    </footer>
  );
};

export default Footer;
