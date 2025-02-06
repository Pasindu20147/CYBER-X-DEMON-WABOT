const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "file:///D:/FRAMEXTEAM/Annotation%202024-12-30%20223823.png",
ALIVE_IMG: process.env.ALIVE_MSG || "Hello, I am CYBER X DEMON WABOT I am alive now!",
};
