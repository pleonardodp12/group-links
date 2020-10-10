import React from 'react';
import Prismic from 'prismic-javascript';

const RedirectTo = () => {
  return (
    <h1>Redirect</h1>
  );
};

export async function getServerSideProps({ params }){
  const client = Prismic.client("https://linksgroup.cdn.prismic.io/api/v2");
  const link = await client.getByUID('shortlink', "linkedin");
  if(link){
    return null
  }
  console.log(link)
  return {
    props: {},
  }
}

export default RedirectTo;