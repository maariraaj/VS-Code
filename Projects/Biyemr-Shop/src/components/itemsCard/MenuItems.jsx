import style from './MenuItems.module.css';
import ItemCard from './ItemCard';

import beats from '../../assets/menuItem/beats.jpg';
import sony from '../../assets/menuItem/sony.jpg';
import senheiser from '../../assets/menuItem/senheiser.jpg';
import iphone from '../../assets/menuItem/iphone14promax.jpg';
import samsung from '../../assets/menuItem/samsungs23.jpg';
import oneplus from '../../assets/menuItem/oneplus11pro.jpg';
import macbook from '../../assets/menuItem/macbookpro.jpg';
import acer from '../../assets/menuItem/acer.jpg';
import asus from '../../assets/menuItem/asus.jpg';

const MenuData=[
    {
        id:"1",
        name:"Beats Headphone",
        price:999,
        image:beats
    },
    {
        id:"2",
        name:"Sony Headphone",
        price:899,
        image:sony
    },
    {
        id:"3",
        name:"Senheiser Headphone",
        price:799,
        image:senheiser
    },
    {
        id:"4",
        name:"Iphone 14 Pro Max",
        price:1199,
        image:iphone
    },
    {
        id:"5",
        name:"Samsung S23",
        price:1099,
        image:samsung
    },
    {
        id:"6",
        name:"OnePlus 11 Pro",
        price:1299,
        image:oneplus
    },
    {
        id:"7",
        name:"Macbook Pro",
        price:2999,
        image:macbook
    },
    {
        id:"8",
        name:"Acer Laptop",
        price:1099,
        image:acer
    },
    {
        id:"9",
        name:"Asus Laptop",
        price:1299,
        image:asus
    }
]

const MenuItems=()=>{
    return(
        <section className={style.items}>
            {MenuData.map(item=> 
                <ItemCard 
                    key={item.id} 
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            )}
        </section>
    )
}

export default MenuItems;