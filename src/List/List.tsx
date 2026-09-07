import './List.css'

interface itemsType
{
    id: number,
    name: string,
    calories: number
}

interface arg
{
    category?: string,
    items: itemsType[]
}

function List({category = '', items = ''} : arg)
{
    let display;
    if (category.length === 0 || items.length === 0) { display = 'none'; } else { display = 'flex' }
    
    const listedItems = items.map  ( item =>   <li className="ol__li" key={item.id}>
                                    {item.name}: &nbsp;
                                    <span className="ol__li--calories">{item.calories}</span></li>
                                    );
    return (
        <div className="div--componentList" style={"display:"&&{display}}>
            <h3 className="div__h3--category">{category}</h3>
            <ol className="div__ol--listedItems">{listedItems}</ol>
        </div>
    );
}

export default List