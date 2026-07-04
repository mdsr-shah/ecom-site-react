import { Plus } from "lucide-react";

const CategoryToolbar = ({

    search,

    setSearch,

    setShowModal

})=>{

    return(

        <div className="toolbar">

            <input

                type="text"

                placeholder="Search categories..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            <button

                className="btn-primary add-btn"

                onClick={()=>setShowModal(true)}

            >

                <Plus className="btn-icon" size={18}/>

                Add Category

            </button>

        </div>

    );

};

export default CategoryToolbar;