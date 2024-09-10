import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'Cool';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '银河智能BI',
          title: '银河智能BI',
          href: 'https://github.com/cool-icu0/GalaxyBI-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/cool-icu0/GalaxyBI-backend',
          blankTarget: true,
        },
        {
          key: 'BI',
          title: '银河智能BI',
          href: 'https://github.com/cool-icu0/GalaxyBI-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
