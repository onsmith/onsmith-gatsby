import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

const description =
  'Aaron is a Teaching Assistant Professor of Computer Science at UNC Chapel Hill.';

export default function Head({ title }) {
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl();

  title = title ? `${title} | onsmith` : "Aaron Smith's Personal Site";
  const image = `${baseUrl}/images/gatsby-icon.png`;

  return (
    <Helmet defer={false}>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}${pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="onsmith13" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
}

function useBaseUrl() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `);
  return data.site.siteMetadata.url;
}
