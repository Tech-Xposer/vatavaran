const express = require("express");
const { getWeatherByIp } = require("../controllers/weather.controller");
const router = require("express").Router();


router.route('/weather').get(getWeatherByIp)

module.exports = router