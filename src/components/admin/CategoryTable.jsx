import { Pencil, Trash2 } from "lucide-react";

import { deleteCategory } from "../../services/categoryService";

const CategoryTable = ({

    categories,

    fetchCategories,

    setEditingCategory,

    setShowModal

})=>{

    const remove=async(id)=>{

        if(!window.confirm("Delete this category?")) return;

        await deleteCategory(id);

        fetchCategories();

    };

    return(

<div className="product-table">

<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Description</th>

<th>Products</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

categories.map(category=>(

<tr key={category.category_id}>

<td>{category.category_id}</td>

<td>{category.name}</td>

<td>{category.description}</td>

<td>{category.total_products}</td>

<td>


<button className="edit-btn" onClick={()=>{
    setEditingCategory(category);
    setShowModal(true);}}>
<Pencil size={18}/>
</button>

<button

className="delete-btn"

onClick={()=>remove(category.category_id)}

>

<Trash2 size={18}/>

</button>



</td>

</tr>

))

}

</tbody>

</table>

</div>

    );

};

export default CategoryTable;