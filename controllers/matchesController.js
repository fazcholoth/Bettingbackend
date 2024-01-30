import asyncHandler from 'express-async-handler';
import Matches from '../models/matchModel';
import bcrypt from 'bcryptjs'
import  Jwt  from 'jsonwebtoken';
import axios from 'axios';

const getMatches = asyncHandler(async (req, res) => {

    const matches = await Matches.find({})
    console.log(matches);
    res.status(200).json(matches)
    
})

const findAssociations = asyncHandler(async (req, res) => {

    const project_key = 'YOUR_PROJ_KEY';
    const token = 'YOUR_ACCESS_TOKEN';
    
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/list/`;
    
    const headers = {
      'rs-token': token,
    };
    
    const response = await axios.get(url, { headers });
    console.log(response.data);
    res.status(200).json(response.data)
    
})

const findTournamentsbyAssociation = asyncHandler(async (req, res) => {

    const project_key = 'YOUR_PROJ_KEY';
    const token = 'YOUR_ACCESS_TOKEN';
    const association_key = 'c.board.bcci.b13f0';
    
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/${association_key}/featured-tournaments/`;
    
    const headers = {
      'rs-token': token,
    };
    
    const response = await axios.get(url, { headers });
    console.log(response.data);
    res.status(200).json(response.data)    
})


const fixturebyTournamentkey = asyncHandler(async (req, res) => {

    const project_key = 'YOUR_PROJ_KEY';
    const token = 'YOUR_ACCESS_TOKEN';
    const tournament_key = 'ausind_2020';
    
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/fixtures/`;
    
    const headers = {
      'rs-token': token,
    };
    
    const response = await axios.get(url, { headers });
    console.log(response.data);
    res.status(200).json(response.data)
    
})

const addMatchtoFeatured = asyncHandler(async (req, res) => {

    const axios = require('axios');

    const project_key = 'YOUR_PROJ_KEY';
    const token = 'YOUR_ACCESS_TOKEN';
    const key = 'rsaeng_2020_t20_03';
    
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/`;
    
    const headers = {
      'rs-token': token,
    };
    
    const response = await axios.get(url, { headers });
    console.log(response.data);

    const match = await Matches.create(
        response.data
    )

    res.status(200).json(match)

})




export {
  addMatchtoFeatured,findAssociations,fixturebyTournamentkey,findTournamentsbyAssociation
};
