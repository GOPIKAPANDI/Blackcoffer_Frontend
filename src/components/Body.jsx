import React from 'react';

const Body = (props) => {
  const print = props.print;
  return (
    <>
    {/* {print.intensity ? :""} */}
        <div className='body_card'>
            {print.end_year ? <div>Endyear : {print.end_year}</div> : <div>Endyear : NA</div>}
            {print.intensity ? <div>Intensity : {print.intensity}</div> :<div>Intensity : NA</div>}
            {print.sector ? <span>Sector : {print.sector}</span> :<span>Sector : NA</span>} | {print.topic ? <span> Topic : {print.topic}</span>  :<span>Topic : NA</span>} 
            {print.insight ? <div style={{fontSize: '14px'}}>Insight : {print.insight}</div> : <div>Insight : NA</div>}
            {print.region ? <div>Region : {print.region}</div> : <div>Region : NA</div>} 
            {print.start_year ? <div>Startyear : {print.insight}</div> : <div>Startyear : NA</div>}
            {print.impact ? <div>Impact : {print.impact}</div> : <div>Impact : NA</div>}
            {print.country ? <div>Country : {print.country}</div> : <div>Country : NA</div>}
            {print.relevance ? <div>Relevance : {print.relevance}</div> : <div>Relevance : NA</div>} 
            {print.pestle ? <div>Pestle : {print.pestle}</div> : <div>Pestle : NA</div>} 
            {print.source ? <div>Source : {print.source}</div> : <div>Source : NA</div>}  
            {print.title ? <div style={{fontSize: '14px'}}>Title : {print.title}</div> : <div>Title : NA</div>} 
            {print.likelihood ? <div>Likelihood : {print.likelihood}</div> : <div>Likelihood : NA</div>} 
        </div>
        </> 
  );
};

export default Body;