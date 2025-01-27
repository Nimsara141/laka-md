//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=AlwngZAA#1PQleyFw1F7RSA02RdZcPW2Gl_D2xCvqerG8J2Voi4w",
//👉 Put Your Mongode Url 🖇️ 👈කියන එක කපලා අයින් කරලා ඔයාගේ Mongode Url එක දාන්න.
MONGODB: process.env.MONGODB || "mongodb+srv://thimiranimsara897:thimira2009#@cluster0.q4ndj.mongodb.net/",
PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94781121579' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
