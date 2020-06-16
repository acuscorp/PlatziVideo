import React from 'react';
import Header from '../components/header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CaruselItems from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='Mi lista 1'>
      <Carousel>
        <CaruselItems />
        <CaruselItems />
        <CaruselItems />
        <CaruselItems />
        <CaruselItems />
      </Carousel>
    </Categories>

    <Categories title='Mi lista 2'>
      <Carousel>
        <CaruselItems />
        <CaruselItems />
        <CaruselItems />
      </Carousel>
    </Categories>

    <Categories title='Mi lista 3'>
      <Carousel>
        <CaruselItems />
      </Carousel>
    </Categories>
    <Footer />
  </div>

);

export default App;

