import React from 'react';
import '../assets/Categories.scss';


function Categories( {Children} )  {
return (
    <div className="Categories">
          <h3 className="categories__title">Mi lista</h3>
           { Children }     
    </div>
    );
}

export default Categories;
