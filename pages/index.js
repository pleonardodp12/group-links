import React from 'react';
import Prismic from 'prismic-javascript';

const Index = ({ data }) => {
  console.log('client')
  return (
    <div style={{ backgroundColor: data.corfundo, color: data.cortexto}} >
      <div className="w-1/2 mx-auto text-center">
        <h1 className="font-bold text-4xl text-center p-8">Links groups</h1>
        <img src={data.logo.url} className="mx-auto rounded-full shadow-2xl w-1/4"/>
          {data.body.map(item => {
          if(item.slice_type === 'secao'){
            return <h2
                      className="font-bold text-2xl text-center pt-4"
                    >
                      {item.primary.nome}
                    </h2>
          }
          if(item.slice_type === 'link'){
            return (
              <div>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 inline-block"
                  href={item.primary.destino.url}>{item.primary.texto_do_botao}
                </a>
              </div>
            );
          }
          if(item.slice_type === 'image'){
            return (
              <img src={item.primary.imagem.url} alt="oi" className="mx-auto"/>
            );
          }
          return <pre>{JSON.stringify(item)}</pre>
          return null;
        })}
      </div>
      <footer className="text-center py-4">
        Projeto desenvolvido por Leonardo Dias
        <br />
        Código fonte disponível em: 
      </footer>
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