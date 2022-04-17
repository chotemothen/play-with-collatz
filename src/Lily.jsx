// import React, { useState, useEffect } from "react";

// // const speechRecognition = new window.webkitSpeechRecognition();
// const tmi = require('tmi.js');
// const opts = {
//   identity: {
//     username: "lilychobot",
//     password: "oauth:cj2ttlgywnrzsg43t9libuzy6xqoja"
//   },
//   channels: [
//     "chotemothen"
//   ]
// };
// // Create a client with our options
// const client = new tmi.client(opts);
// client.connect();


// client.on('connected', onConnectedHandler);

// // Called every time a message comes in
// function onMessageHandler (target, context, msg, self, setIsRickRolled) {
//   if (self) { return; } // Ignore messages from the bot

//   // Remove whitespace from chat message
//   const commandName = msg.trim().toLowerCase();

//   // If the command is known, let's execute it
//   if (commandName.includes("hey lily") || commandName.includes("hi lily")) {
//     client.say(target, `Hi ${context[`display-name`]} I am lily. I am your lovely bot in cho's channel VirtualHug`);
//     console.log(`* Executed ${commandName} command`);
//     console.log(context);
//   } if (commandName.includes("lily greet") || commandName.includes("lily greed") || commandName.includes("lily great")) {
//     const msg = commandName.substring(commandName.indexOf("t")+1);
//     client.say(target, `Hey ${msg}!! Thanks for coming. How are you doing? VirtualHug`);
//   } if (commandName.includes("thanks lily")) {
//     client.say(target, "Your welcome");
//   } if(commandName.includes("played rick roll for ") && commandName.includes("bits!") && context[`display-name`] === "SoundAlerts") {
//     client.say(target, "ha ha cho you got rick rolled LUL!!");
//     window.postMessage("RickRolled", "http://localhost:3000");
//     // setIsRickRolled(true);
//   }
//   else {
//     console.log(`* Unknown command ${commandName}`);
//   }
// }

// // Called every time the bot connects to Twitch chat
// function onConnectedHandler (addr, port) {
//     console.log(`* Connected to ${addr}:${port}`);
//     // client.say(opts.channels[0], "Hello world");
//   }

// // const speechRecognitionList = new window.webkitSpeechGrammarList();
// const Lily = ({isRickRolled, setIsRickRolled}) => {

//     const [message, setMessage] = useState("");

//     useEffect(() => {     
//       client.on('message', (target, context, msg, self) => {onMessageHandler(target, context, msg, self, setIsRickRolled)}); 
//         // speechRecognition.continuous = true;
//         // speechRecognition.interimResults = true;
//         // speechRecognition.start();
//         // const grammar = "#JSGF V1.0; grammar commands; public <command> = lily | greet | hey | hi | say | run ;"
//         // speechRecognitionList.addFromString(grammar, 100)
//         // speechRecognition.grammars = speechRecognitionList;
      
//         // // speechRecognition.onstart = () => {
//         // //   document.querySelector("#status").style.display = "block";
//         // // };
//         // speechRecognition.onerror = () => {
//         //   console.log("Speech Recognition Error");
//         // };
//         // // speechRecognition.onend = () => {
//         // //   document.querySelector("#status").style.display = "none";
//         // //   console.log("Speech Recognition Ended");
//         // // };
      
//         // speechRecognition.onresult = (event) => {
//         //   for (let i = event.resultIndex; i < event.results.length; ++i) {
//         //     if (event.results[i].isFinal) {
//         //       const m = `${message}${event.results[i][0].transcript}`.toLowerCase();
//         //       setMessage(m);}
//         //     // } else {
//         //     //   setMessage(`${message}${event.results[i][0].transcript}`);
//         //     // }
//         //   }
//         // };
//         // document.querySelector("#stop").onclick = () => {
//         //   speechRecognition.stop();
//         // };
//     }, []);

//     useEffect(() => {
//       if (message.includes("hey lily") || message.includes("hi lily") || message.includes("hi lilli") || message.includes("hi lili")) {
//     client.say(opts.channels[0], "Hi I am lily. I am your lovely bot in cho's channel VirtualHug");
//     console.log(`* Executed ${message} command`);
//   } if (message.includes("lily greet") || message.includes("lily greed") || message.includes("lily great")) {
//     const msg = message.substring(message.indexOf("t")+1);
//     client.say(opts.channels[0], `Hey ${msg}!! Thanks for coming. How are you doing? VirtualHug`);
//   } if (message.includes("thanks lily")) {
//     client.say(opts.channels[0], "Your welcome");
//   }
//     }, [message, setMessage])

//     return (
//         <input type="text" value={message} />
//     );
// }

// export default Lily;
