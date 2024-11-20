import { SHOP_DATA } from '../shop-data.js'
import Category from './category.component.jsx';

const CategoriesList = () => {
    return (
        <div className='categories-container'>
{ SHOP_DATA.map((item) => {
            console.log(item.id)
            return (
                <Category key={item.id} item={item} />
            )

        })}
        </div>
       

    );
}

export default CategoriesList;