import { useEffect, useState } from "react";

import CategoryToolbar from "../../components/admin/CategoryToolbar";
import CategoryTable from "../../components/admin/CategoryTable";
import CategoryModal from "../../components/admin/CategoryModal";

import { getCategories } from "../../services/categoryService";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [editingCategory, setEditingCategory] = useState(null);

    const fetchCategories = async () => {

        try{

            const data = await getCategories(search);

            setCategories(data);

        }

        catch(err){

            console.log(err);

        }

    };

    useEffect(()=>{

        fetchCategories();

    },[search]);

    return(

        <>

            <CategoryToolbar

                search={search}

                setSearch={setSearch}

                setShowModal={setShowModal}

            />

            <CategoryModal

                showModal={showModal}

                setShowModal={setShowModal}

                fetchCategories={fetchCategories}

                editingCategory={editingCategory}

                setEditingCategory={setEditingCategory}

            />

            <CategoryTable

                categories={categories}

                fetchCategories={fetchCategories}

                setEditingCategory={setEditingCategory}

                setShowModal={setShowModal}

            />

        </>

    );

};

export default Categories;