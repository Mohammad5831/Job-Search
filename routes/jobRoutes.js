const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();

router.get('/jobs', jobController.getAllJobs);
router.post('/jobs', jobController.createJob);
router.put('/jobs/:id', jobController.updateJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
