import express from 'express';
import { addMatchtoFeatured,findAssociations,fixturebyTournamentkey,findTournamentsbyAssociation,getMatches,findOverstausByNumber,findMatch} from '../controllers/matchesController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getMatches);
router.get('/associations', findAssociations);
router.get('/tournaments/:key',findTournamentsbyAssociation)
router.get('/fixture/:key',fixturebyTournamentkey)
router.post('/addmatch/:key',addMatchtoFeatured)
router.get('/ballbyball/:key',findOverstausByNumber)
router.get('/specificmatch/:key',findMatch)


export default router;
