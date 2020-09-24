import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Assets
import heroImage from "../../assets/images/hero-image.jpg";

// Styles
const HeroImage = styled(LazyLoadImage)`
  max-width: 1000px;
  height: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const Paragraph = styled.p`
  max-width: 450px;
`;

const Home = () => (
  <Wrapper>
    <HeroImage alt="hero-image" src={heroImage} effect="blur" />
    <Row>
      <Column>
        <Paragraph>
          Zes jaar geleden ging ik met mijn zwager op vakantie naar Alaska, met
          een camera onder mijn arm. Geen ervaring, maar wel plezier erin. Toen
          ik terugkwam merkte ik dat mooie foto’s had gemaakt en niet de
          doorsnee vakantiekiekjes. Om mij daarin beter te ontwikkelen ben ik
          gaan oefenen met bewegende voorwerpen en mensen. Dit leidde tot het
          doen van vrijwilligerswerk bij verschillende poppodia. Hier kon ik
          mijn passie voor concerten en muziek combineren met fotografie.
        </Paragraph>
        <Paragraph>
          Door het volgen van verschillende cursussen en workshops heb ik een
          eigen stijl ontwikkeld die zeer gewaardeerd wordt. Een foto kan, net
          als een film, emoties of herinneringen losmaken. Ik vind de mens het
          mooist als ik ze spontaan mag fotograferen: ik ben geen regisseur.
          Graag maak ik reportages/overzichten van festivals, concerten,
          beurzen, sport evenementen en ook begrafenissen. Voor het fotograferen
          van voorwerpen maak ik gebruik van een kleine studio met licht, zodat
          ik een voorwerp optimaal op de plaat kan zetten.
        </Paragraph>
      </Column>
      <Column>
        <Paragraph>
          Nu ben ik op een punt beland dat ik vrijwel altijd mijn camera bij me
          heb. Als ik wandel met de hond, een weekend weg ben, tijdens de
          verschillende jaargetijden of als ik zin heb om willekeurig foto’s te
          maken ergens. Ik volg mijn gevoel en door het spelen met licht en
          lichtinval, komen er mooie foto’s uit.
        </Paragraph>
        <Paragraph>
          Ik hoop dat ik je nieuwsgierig genoeg heb gemaakt om eens een kijkje
          te nemen op mijn website.
        </Paragraph>
      </Column>
    </Row>
  </Wrapper>
);

export default Home;
