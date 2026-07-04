import { useEffect, useState } from "react";

import {
  createCategory,
  updateCategory
} from "../../services/categoryService";

const CategoryModal = ({

  showModal,

  setShowModal,

  fetchCategories,

  editingCategory,

  setEditingCategory

}) => {

  const [form, setForm] = useState({

    name: "",

    description: ""

  });

  useEffect(() => {

    if (editingCategory) {

      setForm({

        name: editingCategory.name,

        description: editingCategory.description

      });

    } else {

      setForm({

        name: "",

        description: ""

      });

    }

  }, [editingCategory]);

  if (!showModal) return null;

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (editingCategory) {

      await updateCategory(

        editingCategory.category_id,

        form

      );

    } else {

      await createCategory(form);

    }

    fetchCategories();

    setShowModal(false);

    setEditingCategory(null);

  };

  return (

    <div className="admin-modal-overlay">

      <div className="admin-modal">

        <div className="admin-modal-header">

          <h2>

            {editingCategory

              ? "Edit Category"

              : "Add Category"}

          </h2>

          <button

            onClick={() => {

              setShowModal(false);

              setEditingCategory(null);

            }}

          >

            ✕

          </button>

        </div>

        <div className="admin-modal-body">

          <form

            className="admin-form"

            onSubmit={handleSubmit}

          >

            <input

              type="text"

              name="name"

              placeholder="Category Name"

              value={form.name}

              onChange={handleChange}

              required

            />

            <textarea

              name="description"

              placeholder="Description"

              value={form.description}

              onChange={handleChange}

            />

            <div className="admin-modal-footer">

              <button

                type="button"

                className="btn-danger"

                onClick={() => {

                  setShowModal(false);

                  setEditingCategory(null);

                }}

              >

                Cancel

              </button>

              <button

                type="submit"

                className="btn-success"

              >

                Save Category

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );

};

export default CategoryModal;