import { PropsWithChildren } from 'react';
import './styles.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { LayoutProps } from './interfaces';

export const Layout = ({
  children,
  withFooter = true,
  withBackground = true,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <div
        className={`layout-container ${
          withBackground ? 'pos_relative' : 'pos_inherit'
        }`}
      >
        <Header />
        <div className="layout-container__content px-mobile-24">{children}</div>
        {withBackground && (
          <>
            <div className="layout-container__purple_bg"></div>
            <div className="layout-container__green_bg"></div>
          </>
        )}
      </div>

      {withFooter && <Footer />}
    </>
  );
};
