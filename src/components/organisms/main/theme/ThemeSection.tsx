import Container from '@components/atoms/container/Container';
import { MAX_CONTENT_WIDTH } from '@styles/size';
import ResponsiveGrid from '@components/atoms/grid/responsive/ResponsiveGrid';
import MainThemeItem from '@components/organisms/main/theme/MainThemeItem';
import ResponsiveThemeSection
  from '@components/organisms/main/theme/ResponsiveThemeSection';
import { useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeContextProvider';

function ThemeSection() {
  const themes = useContext(ThemeContext);

  return (
    <ResponsiveThemeSection>
      <Container
        elementSize="full-width"
        maxWidth={MAX_CONTENT_WIDTH}
        justifyContent="center"
      >
        <ResponsiveGrid columnsDefault={6} columnsMd={4} gap={0}>
          {Object.keys(themes).map((themeKey, i) => {
            const key = `$gift-theme-${i}`;

            return (
              <MainThemeItem themeKey={themeKey} key={key} />
            );
          })}
        </ResponsiveGrid>
      </Container>
    </ResponsiveThemeSection>
  );
}

export default ThemeSection;
