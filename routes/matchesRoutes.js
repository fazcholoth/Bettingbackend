import express from 'express';
import { addMatchtoFeatured,findAssociations,fixturebyTournamentkey,findTournamentsbyAssociation} from '../controllers/matchesController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', registerUser);
router.get('/associations/:key', findAssociations);
router.get('/tournaments/:key',protect,findTournamentsbyAssociation)
router.get('/fixture/:key',protect,fixturebyTournamentkey)
router.get('/addmatch/:key',protect,addMatchtoFeatured)


export default router;
