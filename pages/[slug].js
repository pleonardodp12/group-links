import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';

const RedirectTo = () => {
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <h1>URL não encontrada</h1>
      <p>Estamos redirecionando você para a central de links.</p>
    </div>
  );
};

export async function getServerSideProps({ params, res }){
  const client = Prismic.client("https://linksgroup.cdn.prismic.io/api/v2");
  const link = await client.getByUID('shortlink', params.slug);
  if(link){
    res.statusCode = 301; //conteudo movido permanentemente 
    res.setHeader('Location', link.data.destino.url); //redireciona
    res.end();
    return;
  }
  console.log(link)
  return {
    props: {},
  }
}

export default RedirectTo;