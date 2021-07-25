import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { infoCardPhoto } from './card-photo.module.scss';

export default function CardPhoto() {
  return (
    <StaticImage
      className={infoCardPhoto}
      src="headshot.png"
      alt="A photo of Aaron Smith"
    />
  );
}
