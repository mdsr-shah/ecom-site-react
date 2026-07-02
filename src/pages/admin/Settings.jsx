import { useEffect, useState } from "react";

import {

getSettings,
updateSettings

} from "../../services/settingsService";

const Settings = () => {

  const [form, setForm] = useState({

    full_name: "",

    email: "",

    password: ""

  });

  useEffect(() => {

    fetchSettings();

  }, []);

  const fetchSettings = async () => {

    const data = await getSettings();

    setForm({

      ...data,

      password: ""

    });

  };

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateSettings(form);

    alert("Settings Updated Successfully");

  };

  return (

    <div className="settings-page">

      <h2>

        Admin Settings

      </h2>

      <form
        className="settings-form"
        onSubmit={handleSubmit}
      >

        <label>

          Full Name

        </label>

        <input

          type="text"

          name="full_name"

          value={form.full_name}

          onChange={handleChange}

        />

        <label>

          Email

        </label>

        <input

          type="email"

          name="email"

          value={form.email}

          onChange={handleChange}

        />

        <label>

          New Password

        </label>

        <input

          type="password"

          name="password"

          value={form.password}

          onChange={handleChange}

        />

        <button
          className="btn-primary"
        >

          Save Changes

        </button>

      </form>

    </div>

  );

};

export default Settings;