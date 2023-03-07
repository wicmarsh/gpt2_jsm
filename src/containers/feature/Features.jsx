import React from 'react';
import { Feature } from '../../component'
import './feature.css';

const featureData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine John he give of rich he. They age and draw mrs like. '
  },
  {
    title: 'Become the tended active',
    text: 'From they fine John he give '
  },
  {
    title: 'Message or am nothing',
    text: 'From they fine John he give'
  },
  {
    title: 'Really boy law county',
    text: 'From they fine John he give'
  },
]
const Feature = () => {
  return (
    <div className='gpt2__features section__padding' id='features'>
      <div className='gpt2__feature-heading'>
        <h1 className='gradient__text'>The Future is now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Accses to Get Started</p>
      </div>
      <div className='gpt2__feature-container'>
        {featuresData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} /> ))}
      </div>
    </div>
    
  )
}

export default Feature