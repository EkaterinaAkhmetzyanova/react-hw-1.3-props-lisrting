import PropTypes from 'prop-types';

export default function Listing({ items }) {
    const arr = items.map((item) => {
        if (!item.title) {
            return false;
          }
          
        const currency = item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : 'GBP';
        const quantity = item.quantity <= 10 ? 'low' : item.quantity <=20 ? 'medium' : 'high';

        return (
          <div class="item" key={item.listing_id}>
             <div class="item-image">
                 <a href={item.url}>
                     <img src={item.MainImage.url_570xN} alt={item.title} />
                 </a>
             </div>
             <div class="item-details">
                 <p class="item-title">{item.title.length > 50 ? item.title.slice(0, 49) + '...' : item.title}</p>
                 <p class="item-price">{currency} {item.price}</p>
                <p class={`item-quantity level-${quantity}`}>{item.quantity} left</p>
             </div>
          </div>
       );
    });

    return(
        <div class="item-list">{arr}</div>
    );
}

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}
  
Listing.defaultProps = {
    items: [],
};