const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_29_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0NNd1cvQnVqS2g5WG1sNStHeEN3RnFsMVZCUXZuRWw3dkNyNFFlTFVZND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNTg5ODM5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDFGNDQzNTA1REEzRUI2QjgzRjQzQTk3NzQyOUI5NTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzkyOTUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInowVzYxeXdKVE95eGNqVkdvaW1HQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDI1NWU1N2ItODMzOC00MDNhLWFmNzEtNDg5MWVhYTZjM2RmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDIyNSxcbiAgICAgIDUsXG4gICAgICA0NCxcbiAgICAgIDI1MixcbiAgICAgIDE2MyxcbiAgICAgIDI0LFxuICAgICAgMzUsXG4gICAgICAxMDYsXG4gICAgICAyMzAsXG4gICAgICA5OSxcbiAgICAgIDE2NixcbiAgICAgIDUyLFxuICAgICAgMTc1LFxuICAgICAgNTgsXG4gICAgICAwLFxuICAgICAgMTU4LFxuICAgICAgMjA5LFxuICAgICAgMTU2LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDI3LFxuICAgICAgMTUwLFxuICAgICAgMTk1LFxuICAgICAgNTcsXG4gICAgICAxNTUsXG4gICAgICAxMjAsXG4gICAgICAzMixcbiAgICAgIDE1NCxcbiAgICAgIDIwLFxuICAgICAgMzIsXG4gICAgICAyMzgsXG4gICAgICAxNTYsXG4gICAgICAxNTAsXG4gICAgICAxODUsXG4gICAgICAyMDMsXG4gICAgICAxMjAsXG4gICAgICAxNDYsXG4gICAgICA5MixcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTkxOVDRLMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTU4OTgzOTY6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZea8J2Xm/Cdl6LwnZem8J2XpyDwnZee8J2XnPCdl6HwnZeaXCIsXG4gICAgXCJsaWRcIjogXCIxODIzMjMzNzUxNDY3OToyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdVorcDBFRU96Q3ByVUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZZYjdVN3VUeEt3SU1mUEIraUNzRUI5UldBMWR3cHAzaktwdEc1MENsbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzlqVUJWYzJzWlo2bDQ4RHRDWFlIenp2cE1qSmxmcFpoYXhBRS9naW51c0FBeVBzd0tXLzBzUit1RHppL29VZGpaOTFrdUZxVFkrbkR4Nm4vejdTRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVcralVLSTRKN2s4ajJ6Rmw4QUhIb0s1cEdUVy9FQ3NnRzhoM2Z5WFNmVVpyczMyaW1JekNYRzA5eE5rVjZ0ODdUMmx2b3hYdGFyYi8xV3BjVmNPanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTU4OTgzOTY6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzOTI5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGeGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ4ay5qc29uIjogIntcImtleURhdGFcIjpcImdsZlcxbFEwVXgzSWwveXM0RU8vd0dac1hDQVczM3pDV0cwQ25xdXlyK3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzNjU2MTMzOSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
