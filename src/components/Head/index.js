import React      from 'react';
import { Helmet } from "react-helmet";

export default function Head(props) {
  const renderCanonicalUrl = (canonicalPath) => {
    if (canonicalPath) {
      let baseURL = process.env.REACT_APP_CANONICAL_URL
      let canonicalURL = new URL(canonicalPath, baseURL).href

      return <link rel="canonical" href={canonicalURL} />
    }
  }

  return (
    <Helmet>
      { renderCanonicalUrl(props.canonicalPath) }

      <title>{props.title}</title>
    </Helmet>
  );
}
