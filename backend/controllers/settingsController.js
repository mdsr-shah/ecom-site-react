const Settings = require("../models/settingsModel");

const getSettings = async (req, res) => {

  try {

    const admin = await Settings.getAdmin();

    res.json(admin);

  }

  catch (err) {

    console.log(err);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

const updateSettings = async (req, res) => {

  try {

    const {

      username,
      email,
      password

    } = req.body;

    await Settings.updateAdmin(

      username,
      email,
      password

    );

    res.json({

      message: "Settings Updated"

    });

  }

  catch (err) {

    console.log(err);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

module.exports = {

  getSettings,
  updateSettings

};