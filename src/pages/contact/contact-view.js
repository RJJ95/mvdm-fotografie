import React from "react";

// Assets
import image from "../../assets/images/contact-image.jpg";

// Components
import Row from "../../components/primitives/row";
import Column from "../../components/primitives/column";
import Image from "../../components/primitives/image";

// Styles
import { Paragraph } from "./contact-styles";

const Contact = () => (
  <Row>
    <Column>
      <Paragraph>
        Indien u met mij wilt samenwerken, kan ik u verzekeren dat ik altijd
        goed voorbereid. U kunt er van op aan dat u de fot een afzienbare
        termijn ontvangt. Deze website is een impressie van mijn werk, maar ik
        sta open voor andere thema’s of vragen over fotografie.
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
