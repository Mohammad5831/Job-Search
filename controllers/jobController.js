const Job = require('../models/job');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'خطایی رخ داده است' });
    }
};

exports.createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: 'خطایی رخ داده است' });
    }
};
exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            return res.status(404).json({ error: 'شغل پیدا نشد' });
        }
        await job.update(req.body); res.json(job);
    }
    catch (error) {
        res.status(500).json({ error: 'خطایی رخ داده است' });
    }
};
exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            return res.status(404).json({ error: 'شغل پیدا نشد' });
        }
        await job.destroy(); res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'خطایی رخ داده است' });
    }
};