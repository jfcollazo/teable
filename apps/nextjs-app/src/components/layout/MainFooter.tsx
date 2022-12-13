import GithubIcon from '@teable-group/ui-lib/icons/social/github.svg';
import type { FC } from 'react';

export const MainFooter: FC = () => {
  return (
    <div>
      <div className={'bgImage'}></div>
      <div className={'content'}>
        <a
          href={'https://github.com/teable-group/teable'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};