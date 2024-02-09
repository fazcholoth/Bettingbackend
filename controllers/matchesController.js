import asyncHandler from "express-async-handler";
import Matches from "../models/matchModel.js";
import axios from "axios";

const project_key = "RS_P_1744661780011028485";
const token = "v5sRS_P_1744661780011028485s13048140061676323969";

const getMatches = asyncHandler(async (req, res) => {
  const matches = await Matches.find({});
  // console.log(matches);
  res.status(200).json(matches);
});

const findMatch = asyncHandler(async (req, res) => {

  const match_key = req.params.key;

  const match = await Matches.findOne({key:match_key});
  let section1
  let section2

  const score1= match.teams.a.score
  const score2= match.teams.b.score
  
   if (match.format=="t20") {
     console.log(match.format);
    section1 = [
      { id: 1, title: "team1 Overs 1", data: [score1[0], score1[2], score1[3], score1[3], score1[4]],},
      { id: 2, title: "team1 Overs 2", data: [score1[5], score1[6], score1[7], score1[8], score1[9]] },
      { id: 3, title: "ream1 Overs 3", data: [score1[10], score1[11], score1[12], score1[13], score1[14]]},
      { id: 4, title: "team1 Overs 4", data: [score1[15], score1[16], score1[17], score1[18], score1[19]]},
    ]

    section2 = [
      { id: 5, title: "team2 Overs 1", data: [score2[0], score2[2], score2[3], score2[3], score2[4]],},
      { id: 6, title: "team2 Overs 2", data: [score2[5], score2[6], score2[7], score2[8], score2[9]] },
      { id: 7, title: "team2 Overs 3", data: [score2[10], score2[11], score2[12], score2[13], score2[14]]},
      { id: 8, title: "team2 Overs 4", data: [score2[15], score2[16], score2[17], score2[18], score2[19]]},
    ]

    
   }else{


    section1 = [
      { id: 1, title: "Five Overs 1", data: [score2[0], score2[2], score2[3], score2[3], score2[4]],},
      { id: 2, title: "Five Overs 2", data: [score2[5], score2[6], score2[7], score2[8], score2[9]] },
      { id: 3, title: "Five Overs 3", data: [score2[10], score2[11], score2[12], score2[13], score2[14]]},
      { id: 4, title: "Five Overs 4", data: [score1[15], score1[16], score1[17], score1[18], score1[19]]},
      { id: 5, title: "Five Overs 1", data: [score1[20], score1[21], score1[22], score1[23], score1[24]]},
      { id: 6, title: "Five Overs 2", data: [score1[25], score1[26], score1[27], score1[28], score1[29]]},
      { id: 7, title: "Five Overs 3", data: [score1[30], score1[31], score1[32], score1[33], score1[34]]},
      { id: 8, title: "Five Overs 4", data: [score1[35], score1[36], score1[37], score1[38], score1[39]]},
      { id: 9, title: "Five Overs 4", data: [score1[40], score1[41], score1[42], score1[43], score1[44]]},
      { id: 10, title: "Five Overs 4",data: [score1[45], score1[46], score1[47], score1[48], score1[49]]},
    ];
  
    section2 = [
      { id: 11, title: "Five Overs 1", data: [score2[0], score2[2], score2[3], score2[3], score2[4]],},
      { id: 12, title: "Five Overs 2", data: [score2[5], score2[6], score2[7], score2[8], score2[9]] },
      { id: 13, title: "Five Overs 3", data: [score2[10], score2[11], score2[12], score2[13], score2[14]]},
      { id: 14, title: "Five Overs 4", data: [score1[15], score1[16], score1[17], score1[18], score1[19]]},
      { id: 15, title: "Five Overs 1", data: [score1[20], score1[21], score1[22], score1[23], score1[24]]},
      { id: 16, title: "Five Overs 2", data: [score1[25], score1[26], score1[27], score1[28], score1[29]]},
      { id: 17, title: "Five Overs 3", data: [score1[30], score1[31], score1[32], score1[33], score1[34]]},
      { id: 18, title: "Five Overs 4", data: [score1[35], score1[36], score1[37], score1[38], score1[39]]},
      { id: 19, title: "Five Overs 4", data: [score1[40], score1[41], score1[42], score1[43], score1[44]]},
      { id: 20, title: "Five Overs 4", data: [score1[45], score1[46], score1[47], score1[48], score1[49]]},
    ];

   }
  

  console.log(match);
  res.status(200).json({match,section1:section1,section2:section2});
});


const findMatchforuser = asyncHandler(async (req, res) => {

  const match_key = req.params.key;

  const match = await Matches.findOne({key:match_key});
  
  console.log(match);
  res.status(200).json({match,section1:section1,section2:section2});
});

const findAssociations = asyncHandler(async (req, res) => {
  const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/list/`;

  const headers = {
    "rs-token": token,
  };

  const response = await axios.get(url, { headers });
  console.log(response.data);
  res.status(200).json(response.data);
});



const findTournamentsbyAssociation = asyncHandler(async (req, res) => {
  const association_key = req.params.key;
  // console.log("in tournaments" ,association_key);

  const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/${association_key}/featured-tournaments/`;

  const headers = {
    "rs-token": token,
  };

  const response = await axios.get(url, { headers });
  // console.log(response.data);
  res.status(200).json(response.data);
});

const fixturebyTournamentkey = asyncHandler(async (req, res) => {
  const tournament_key = req.params.key;
  // console.log("in fixture" ,tournament_key);

  const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/fixtures/`;

  const headers = {
    "rs-token": token,
  };

  const response = await axios.get(url, { headers });
  // console.log(response?.data?.data);
  res.status(200).json(response.data);
});

const addMatchtoFeatured = asyncHandler(async (req, res) => {
  const match_key = req.params.key;
  // console.log(match_key,"reache add");

  const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${match_key}/`;

  const headers = {
    "rs-token": token,
  };

  const response = await axios.get(url, { headers });
  // console.log(response.data , "api response");
  const matchdata = response?.data?.data;

  const match = await new Matches({
    key: matchdata.key,
    name: matchdata.name,
    short_name: matchdata.short_name,
    status: matchdata.status,
    start_at: matchdata.start_at,
    tournament: matchdata.tournament,
    teams: {
      a: {
        name: matchdata.teams.a.name,
        score: [[]],
      },
      b: {
        name: matchdata.teams.b.name,
        score: [[]],
      },
    },
    format: matchdata.format,
  });

  const addedmatch = match.save();

  console.log("db response");

  res.status(200).json(match);
});

const findOverstausByNumber = asyncHandler(async (req, res) => {
  let overkey;
  // const match_key = req.params.key;
  const match_key = "a-rz--cricket--K51746068628605947926";

  const matchnow = await Matches.findOne({ key: match_key });

  // console.log(matchnow);

  var updatedMatch = null;

  if (
    (matchnow?.over == 20 && matchnow?.format == "t20") ||
    matchnow?.over == 50
  ) {
    updatedMatch = await Matches.findOneAndUpdate(
      { key: match_key },
      {
        $set: {
          over: 1,
          batteam: 2,
        },
      },
      { new: true }
    );

    console.log(updatedMatch);
  }

  if (updatedMatch || matchnow?.batteam == 2) {
    overkey = "b_1_" + (updatedMatch ? updatedMatch.over : matchnow?.over);
  } else {
    overkey = "a_1_" + matchnow?.over;
  }
  

  console.log(overkey);

  // console.log(overkey);

  const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${match_key}/ball-by-ball/${overkey}/`;

  const headers = {
    "rs-token": token,
  };

  const response = await axios.get(url, { headers });

  const ballupdate = response.data.data.over;

  // console.log(ballupdate.index.over_number);

  const newArray = ballupdate.balls.map(({ batsman, team_score }) => {
    const { is_four, is_six } = batsman;
    return {
      isDotball: batsman.is_dot_ball,
      isFour: is_four,
      isSix: is_six,
      Runs: team_score.runs,
      Extras: team_score.extras,
      isWiket: team_score.is_wicket,
    };
  });

  //  console.log(ballupdate.index.over_number+1);

  if (matchnow.batteam==2||updatedMatch) {

    const newMatch = await Matches.findOneAndUpdate(
      { key: match_key },
      {
        $set: {
          startedmanage: true,
          over: ballupdate?.index?.over_number + 1,
          [`teams.b.score.${ballupdate.index.over_number}`]: newArray,
        },
      },
      { new: true }
    );

  }else{

    const newMatch = await Matches.findOneAndUpdate(
      { key: match_key },
      {
        $set: {
          startedmanage: true,
          over: ballupdate?.index?.over_number + 1,
          [`teams.a.score.${ballupdate.index.over_number}`]: newArray,
        },
      },
      { new: true }
    );

  }

  res.status(200).json({ data: "hai" });
});

export {
  addMatchtoFeatured,
  findAssociations,
  fixturebyTournamentkey,
  findTournamentsbyAssociation,
  getMatches,
  findOverstausByNumber,
  findMatch
};
