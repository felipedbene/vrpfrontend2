import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
    constructor(props){
        super(props);
        this.products = this.getProducts();
        
    }
    
    getProducts(){
        return [{imageUrl: "http://loremflickr.com/150/150?random=1", 
        productName: "Product 1", 
        releasedDate: "May 31, 2016", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4, 
        numOfReviews: 2 },
        {imageUrl: "http://loremflickr.com/150/150?random=2", 
        productName: "Product 2", 
        releasedDate: "June 1, 1902", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5, 
        numOfReviews: 8 },
        {imageUrl: "http://loremflickr.com/150/150?random=3", 
        productName: "Product 3", 
        releasedDate: "December 31, 2019", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 1, 
        numOfReviews: 200 }
        ]
    }
    
    
    render(){
        //const listProducts = this.products.map( (product) => <Product key={product.productName} data={product} /> );
        const listProducts = "";
    return(
        <div>
        {listProducts.length > 0 ? (
        <ul>{listProducts}</ul>
        ) : (
        <ul>No products to display !</ul>
        )}
        </div>
        );
}
    
}

export default Products;