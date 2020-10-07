import React from "react";

// Assets
import image from "../../assets/images/contact-image.jpg";

// Components
import Row from "../../components/primitives/row";
import Column from "../../components/primitives/column";
import Image from "../../components/primitives/image";

// Styles
import { Paragraph, Link } from "./contact-styles";

const Contact = () => (
  <Row>
    <Column>
      <Paragraph>
        Indien u interesse hebt om met mij samen te werken ga ik eerst een
        persoonlijk gesprek met u aan om uw wensen in kaart te brengen. Ik
        bereid me altijd goed voor op een opdracht. U kunt ervan op aan dat u de
        foto's binnen afzienbare tijd ontvangt. Deze website is een impressie
        van mijn werk, maar ik sta open voor andere opdrachten/thema's.
      </Paragraph>
      <Paragraph>
        Neem voor vragen contact met mij op per mail of telefoon en indien u
        wilt kunnen we elkaar ontmoeten onder het genot van een bakje koffie.
      </Paragraph>
      <Paragraph>Mail: marc@mvdmfotografie.nl</Paragraph>
      <Paragraph>Telefoon: +31 6 5240 6337</Paragraph>
    </Column>
    <Column>
      <Image effect="blur" src={image} />
    </Column>
  </Row>
);

export default Contact;
