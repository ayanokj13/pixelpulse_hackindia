const express = require('express');
const pool = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * POST /api/jobs/create
 * Create a new job (Only Businesses)
 */
router.post('/create', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'business') return res.status(403).json({ error: 'Only businesses can post jobs' });

    const { title, description, skills, budget, deadline, engagement_model } = req.body;
    const newJob = await pool.query(
      `INSERT INTO jobs (title, description, skills, budget, deadline, engagement_model, business_id) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, skills, budget, deadline, engagement_model, req.user.id]
    );

    res.status(201).json({ message: 'Job created successfully', job: newJob.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/jobs
 * Fetch all jobs
 */
router.get('/', async (req, res) => {
  try {
    const jobs = await pool.query('SELECT * FROM jobs ORDER BY created_at DESC');
    res.json(jobs.rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/jobs/:id
 * Fetch a single job by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const job = await pool.query('SELECT * FROM jobs WHERE id = $1', [req.params.id]);
    if (job.rows.length === 0) return res.status(404).json({ error: 'Job not found' });

    res.json(job.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * DELETE /api/jobs/:id
 * Delete a job (Only Business Owners)
 */
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'business') return res.status(403).json({ error: 'Only businesses can delete jobs' });

    const job = await pool.query('DELETE FROM jobs WHERE id = $1 AND business_id = $2 RETURNING *', [
      req.params.id,
      req.user.id,
    ]);

    if (job.rows.length === 0) return res.status(404).json({ error: 'Job not found or unauthorized' });

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
