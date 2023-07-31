import Benefits from '../Components/Benefits/Benetifs';
import Cardapio from '../Components/Cardapio/Cardapio';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import ImageText from '../Components/ImageText/ImageText';
import Menu from '../Components/Menu/Menu';
import Navbar from '../Components/Navbar/Navbar';
import Reviews from '../Components/Reviews/Reviews';
import client from '../sanity';

export default function Home({
  header,
  benefits,
  about,
  cardapio,
  reviews,
  location,
  menu,
  footer,
}) {
  return (
    <>
      <Navbar />
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} id='about' />
        <Cardapio cardapio={cardapio} />
        <Reviews reviews={reviews} />
        <ImageText data={location} id='location' />
        <Menu menu={menu} />
      </main>
      <Footer footer={footer} />
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`);
  const reviews = await client.fetch(`*[_type == "reviews"][0..2]`);
  const location = await client.fetch(`*[_type == "location"][0]`);
  const menu = await client.fetch(`*[_type == "menu"][0..19]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);

  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
      reviews,
      location,
      menu,
      footer,
    },
  };
};
