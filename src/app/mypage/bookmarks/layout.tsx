import { css } from '@root/styled-system/css';

export default function BookmarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 16px',
      })}
    >
      <h1
        className={css({
          textStyle: 'headline3',
          marginBottom: '24px',
          color: 'textDefault',
        })}
      >
        북마크
      </h1>
      {children}
    </div>
  );
}
