import {useState,useEffect} from 'react';
import  { Category } from '../../components/Category/Category';
import { Card } from '../../components/blog/Card';

const Home = () => {
const [card,setCard] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts',);
      const posts = await response.json();
      console.log(posts);
      setCard(posts);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);


  return (
    <>
      <Category />
      {card.length > 0 && card.map(card => {
       return <Card {...card}/>
      })}
    </>
  );
};

export default Home;
