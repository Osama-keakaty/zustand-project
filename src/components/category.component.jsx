const Category = ({ item }) => {
    const { name, price } = item;
    console.log(name)
    return (
        <div className="categroy-container">
            <h1>{name}</h1>
            <span> <span> + </span>   {price}$ <span> - </span> </span> 
        </div>
    );

}

export default Category;