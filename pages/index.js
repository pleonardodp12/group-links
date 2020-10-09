import React from 'react';
import Prismic from 'prismic-javascript';

const Index = (props) => {
  console.log('client')
  return (
    <div style={{ backgroundColor: props.data.corfundo, color: props.data.cortexto}}>
      <h1>Links groups</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    
  );
};

export async function getServerSideProps(){
  console.log('server')
  const client = Prismic.client("https://linksgroup.cdn.prismic.io/api/v2")
  const centralLinks = await client.getSingle("centrallinks")
  console.log(centralLinks)
  return {
    props: {
      data: centralLinks.data,
    }
  }
}

export default Index;