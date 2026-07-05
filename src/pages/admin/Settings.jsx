import { useEffect, useState } from "react";

import {

getSettings,
updateSettings

} from "../../services/settingsService";

const Settings = () => {

  const [form, setForm] = useState({

    username: "",

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

          Username

        </label>

        <input

          type="text"

          name="username"

          value={form.username}

          onChange={handleChange}

          readOnly

        />

        <label>

          Email

        </label>

        <input

          type="email"

          name="email"

          value={form.email}

          onChange={handleChange}

          readOnly

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
          className="btn-success"
        >

          Save Changes

        </button>

      </form>

    </div>

  );

};

export default Settings;