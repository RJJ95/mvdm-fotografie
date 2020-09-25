import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Assets
import image from "../../assets/images/contact-image.jpg";

// Components
import Row from "../../components/primitives/row";
import Column from "../../components/primitives/column";

// Styles
const Paragraph = styled.p`
  max-width: 450px;
  margin-top: 0;
  margin-right: 20px;
`;

const Image = styled(LazyLoadImage)`
  max-width: 500px;
  height: auto;
`;

const Contact = () => (
  <Row>
    <Column>
      <Paragraph>
        Indien u met mij wilt samenwerken, kan ik u verzekeren dat ik altijd
        goed voorbereid.U kunt er van op aan dat u de fot een afzienbare termijn
        ontvangt.Deze website is ee e van mijn werk, maar ik sta open voor
        andere thema’s of vragen over fotografie.
      </Paragraph>
      <Paragraph>
        Neem contact met mij op per mail en dan kunnen we afspreken voor een bak
        koffie.
      </Paragraph>
    </Column>
    <Column>
      <Image effect="blur" src={image} />
    </Column>
  </Row>
);

export default Contact;
