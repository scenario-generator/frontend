import FaqQuestions from './FaqQuestions'

let strings = {
  headerTitle: 'Scenario Generator',
  rootPageTitle: 'Scenario Generator | Random Challenges for Popular Games',
  subscribePageTitle: 'Scenario Generator | Subscribe to our mailing list',
  generatorPageTitle: ((type, generator) => `${type} generator for ${generator}`),
  subscribe: {
    button: 'Subscribe for updates',
    pitch: [
      "Want to hear when new generators or features get added to the site?",
      "Just enter your email in below and hit subscribe.",
    ],
    placeholder: 'Email Address',
  },
  faq: {
    title: 'FAQ',
    questions: FaqQuestions
  },
}

export default strings