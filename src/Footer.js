import React from 'react';

const Footer= () =>{

	const year = new Date().getFullYear();
	
  return (
    <div>
      <footer>
      	<p> Copyright © {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
