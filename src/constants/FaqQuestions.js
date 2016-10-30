import FaqQuestions from './FaqQuestions'
import ENV from '../../env'

let questions = {
  'What is Scenario Generator?':
  "Scenario Generator is a site I created for generating randomized characters, playthroughs, and scenarios for various games including Skyrim, Minecraft, and Crusader Kings 2. The site allows you to try games in ways you otherwise wouldn't and to challenge yourself to something new.",
  "What character should I play in Skyrim?":
  "A stealth archer, no matter what you play you'll always end up as one anywhere, it's clearly the best.",
  "Why did you build Scenario Generator?":
  "Scenario Generator was originally built as just a challenge generator for Dwarf Fortress. It gave you a location, challenge and a restriction to make things harder. The site sat inactive at dwarf-fortress-scenario-picker.herokuapp.com for about 7 or 8 months before I got the idea to make generators for other games as well. Whilst planning out a Minecraft and Crusader Kings 2 generator I realise it would be smarter to just make one system that could host generators for lots of games. A week or two later I bought scenariogenerator.net and launched the new site.",
  "Do you take suggestions for games?":
  `Yes! Shoot me an email at <b>${ENV.email}</b> to let me know what game you want. I read every suggestion that is posted and have a long list of requested games that are going to make it onto the site. Unfortunately some games just aren't suited to the format and can't easily be translated into a generator, however most are so don't hesitate to send your suggestion.`,
  "Can I write my own generator?":
  "Not yet but currently I'm building some forms for creating generators. Once it's done I'll make it public and the best will become a part of the site.",
  "I want to give you my email to get updates. Will you spam me?":
  "I will never spam you or share your email address with any third parties. Your email is strictly confidential and I will only send you emails every so often to provide you with updates about the site. I strive to make sure that every email I send out contains at least a few new games since the last email so there'll always be a chance that the game you're waiting for has been added.",
  "I have a great idea for a new feature!":
  "Send me an email. I love adding new features and if your suggestion is good I'll definitely include it in the site. So far scenario/character/playthrough saving, item completion marking, and individual column rerolling have all been added due to community requests.",
  "Why scenario generator and not challenge generator?":
  "I can't remember. The original site was just called Dwarf Fortress Scenario Picker, I have no idea why I named it that but Scenario Generator just naturally evolved from that.",
  "Which games get the most traffic?":
  "Skyrim and Minecraft get the most traffic. Crusader Kings 2, Pokemon, and Europa Universalis come up just behind them. None of the generators get ignored however, they are all used by fans of their respective games.",
}

export default questions